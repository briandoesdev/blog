// @ts-nocheck

type Appsettings = {
  ENVIRONMENT: string,
  VITE_GRAPHCMS_URL: string
}

export async function get() : Promise<{body: Appsettings}> {
  const toBool = (variable : string) : boolean => {
    if (variable && variable.toLowerCase() === "true") {
      return true;
    }
    return false;
  }

return {
    body: {
      ENVIRONMENT: process.env["ENVIRONMENT"] || "development",
      VITE_GRAPHCMS_URL: process.env["VITE_GRAPHCMS_URL"]
    }
  };
}