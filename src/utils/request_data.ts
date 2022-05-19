import { Dispatch, SetStateAction } from "react";

type Setter = Dispatch<SetStateAction<any | null>>;

export function requestData(setter: Setter, url: string) {
  try {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setter(json);
      });
  } catch (err) {
    console.log(err);
  }
}
