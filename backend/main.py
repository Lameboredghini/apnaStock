from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pymongo

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    # allow_methods=["*"],
    allow_headers=["*"],
)

client = pymongo.MongoClient("mongodb+srv://admin:admin@cluster0.mmjjtnc.mongodb.net/test")
db=client['Stocks']
db1=client["Indexes"]


@app.get("/")
async def root():
    coll=db['AshokLeyland']
    print(coll)
    cursor=coll.find({}, {'_id': 0})
    # for each in cursor:
    #     print(each)
    return {"data":list(cursor)}
    # return {"message": "Hello World wollololo"}

@app.get("/stocks/{stock_name:str}")
async def stocks(stock_name):
    coll=db[stock_name]
    cursor=coll.find({}, {'_id': 0})
    return {"data":list(cursor)}

@app.get("/index/{index_name:str}")
async def index(index_name):
    coll=db1[index_name]
    cursor=coll.find({}, {'_id': 0})
    return {"data":list(cursor)}