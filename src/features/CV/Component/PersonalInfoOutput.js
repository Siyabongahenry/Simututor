import CVSection from "./CVSection";
import PropLabelAndValue from "./PropLabelAndValue";
export default function PersonalInfoOutput({personalInfo={}}){
    
    return(
        <CVSection name="Personal Information">
            <PropLabelAndValue labelName="Full Names" value={personalInfo.firstName+" "+personalInfo.middleName}/>
            <PropLabelAndValue labelName="Last Name" value={personalInfo.lastName}/>
            <PropLabelAndValue labelName="Identity" value={personalInfo.identity}/>
            <PropLabelAndValue labelName="Date of Birth" value={personalInfo.dateOfBirth}/>
            <PropLabelAndValue labelName="Citizenship" value={personalInfo.citizenship}/>
            <PropLabelAndValue labelName="Tax Number" value={personalInfo.taxNumber}/>
            <PropLabelAndValue labelName="Criminal Record" value={personalInfo.criminalRecord}/>
            <PropLabelAndValue labelName="Health Status" value={personalInfo.healthStatus}/>
            <PropLabelAndValue labelName="Marital Status" value={personalInfo.maritalStatus}/>
            {
                personalInfo.computerLiteracy &&
                <PropLabelAndValue labelName="Computer Literacy" value={personalInfo.computerLiteracy}/>
            }
            {
              personalInfo.driversLicence &&
              <PropLabelAndValue labelName="Drivers Licence" value={personalInfo.driversLicence}/>
            }       
            <hr/>
        </CVSection>
    )
}