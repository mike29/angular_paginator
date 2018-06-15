/**
 * Created by Michael M. Simon on 6/13/2018.
 */
export interface Deserializable {
  deserialize(input: any): this;
}
