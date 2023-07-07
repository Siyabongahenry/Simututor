import CVSection from "./CVSection";
import PropLabelAndValue from "./PropLabelAndValue";
export default function PersonalDetailsSection({person={}}){
    const{contacts} = person;
    return(
        <CVSection name="Personal Details" person>
            <PropLabelAndValue labelName="Full Names" value={person.firstName+" "+person.middleName}/>
            <PropLabelAndValue labelName="Last Name" value={person.lastName}/>
            <PropLabelAndValue labelName="Identity" value={person.identity}/>
            <PropLabelAndValue labelName="Date of Birth" value={person.dateOfBirth}/>
            <PropLabelAndValue labelName="Citizenship" value={person.citizenship}/>
            <PropLabelAndValue labelName="Tax Number" value={person.taxNumber}/>
            <PropLabelAndValue labelName="Criminal Record" value={person.criminalRecord}/>
            <PropLabelAndValue labelName="Health Status" value={person.healthStates}/>
            <PropLabelAndValue labelName="Marital Status" value={person.maritalStatus}/>
            {
                person.computerLiteracy &&
                <PropLabelAndValue labelName="Computer Literacy" value={person.computerLiteracy}/>
            }
            {
              person.driversLicence &&
              <PropLabelAndValue labelName="Drivers Licence" value={person.driversLicence}/>
            }       
        </CVSection>
    )
}