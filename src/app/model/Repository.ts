/**
 * Created by Michael M. Simon on 6/13/2018.
 */
import {Deserializable} from "./deserializable";

export class Repository implements Deserializable {
    _name:string;
    _uri: string;

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
}
