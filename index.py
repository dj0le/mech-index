import uvicorn
from os import getenv

if __name__ == "__index__":
    port = int(getenv("PORT", 8000))
    uvicorn.run("mech_app.api:app", host="0.0.0.0", port=port,reload=True)