from pydantic import BaseModel

class Mech(BaseModel):
    id: int
    shortName: str
    chassis: str
    weightClass: str
    role: str
    weight: int
    year: int
    cost: int
    bv: int
    origin: str
    armorType: str
    externalArmor: int
    internalArmor: int
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
    role: str
    thumbnail: str

    class Config:
        orm_mode = True