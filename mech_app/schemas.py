from pydantic import BaseModel

class Mech(BaseModel):
    id: int
    chassis: str
    model: str
    weightClass: str
    weight: int
    year: int
    cost: int
    bv: int
    isClan: str
    armorType: str
    totalExternalArmor: int
    totalInternalArmor: int
    structureType: str
    engine: str
    heatCapacity: int
    heatSinks: int
    fullsize: str

    class Config:
        orm_mode = True

class MechShort(BaseModel):
    id: int
    chassis: str
    weightClass: str
    year: int
    thumbnail: str

    class Config:
        orm_mode = True

class Image(BaseModel):
    id: int
    fullsize: str   
    thumbnail: str


    class Config:
        orm_mode = True