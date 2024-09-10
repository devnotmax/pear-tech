import { ILoginForm, IRegisterForm } from "@/interfaces/forms";

export const loginService = async (url: string, data:ILoginForm) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const registerService = async (url:string, data: IRegisterForm) => {
    const response = await fetch(url, {
        headers: {
            "content-type": "application/json",
        }
        ,method: "POST",
        body: JSON.stringify(data)
    })
    const json = await response.json();
    return json;
}