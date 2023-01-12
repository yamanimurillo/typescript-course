import { Map } from "./maps";
import { User } from "./users";
import { Company } from "./company";

const user = new User();
const company = new Company();
const map = new Map(document.getElementById("map") as HTMLElement);

map.addMarker(user);
map.addMarker(company);
