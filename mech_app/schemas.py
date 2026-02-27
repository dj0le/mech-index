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
    thumbnail: str
    fullsize: str

    class Config:
        from_attributes = True
