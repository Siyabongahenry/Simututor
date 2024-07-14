import { universitiesData } from "./Data/universities-data";
import Institutions from "./Components/Institutions";
export default function UniApplications()
{
    return <Institutions institutionsData={universitiesData} type="Universities"/>
}