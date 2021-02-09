import React from 'react'
import { Component } from 'react'
import { Input } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react"
import { FormControl, FormLabel, RadioGroup, FormHelperText, HStack, Radio } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import  $  from "jquery";
import  { connect } from 'react-redux'
import addprofileaction from '../../redux/actions/editprofileaction'

class EditProfile extends Component {
    constructor(propos) {
        super(propos);
        console.log("props:",propos.addnewprofile);
        console.log("datasdata:",propos.datas);
        this.state = {
            Profilelimage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            firstname: '',
            lastname: '',
            location: '',
            biograpthy: '',
            selectedGender: '',
            selectedchoise: '',
            website: '',
            githubaccount: '',
            linkedinaccount: '',
            companyname: '',
            jobtitle: '',
            yearsintech: "",
            engnchoice: '',
            codingstuckinuse: '',
            codingsticktolearn: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.ChangeGender = this.ChangeGender.bind(this);
        this.Changechoice = this.Changechoice.bind(this);
        this.ChangeEnngenchoice = this.ChangeEnngenchoice.bind(this);
        this.Changestackinuse = this.Changestackinuse.bind(this);
        this.Changestacktolearn = this.Changestacktolearn.bind(this);
        this.fileSelecHandler = this.fileSelecHandler.bind(this);
        this.handlesave=this.handlesave.bind(this);
    }
    imageSelectedhandler(event) {
        console.log(event.target.files)
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    ChangeGender(event) {
        this.setState({ selectedGender: event.target.value })
    }
    Changechoice(event) {
        this.setState({ selectedchoise: event.target.value })

    }
    ChangeEnngenchoice(event) {
        this.setState({ engnchoice: event.target.value })
    }
    Changestackinuse(event) {
        this.setState({ codingstuckinuse: event.target.value })
    }
    Changestacktolearn(event) {
        this.setState({ codingsticktolearn: event.target.value })
    }
    fileSelecHandler(event) {
        console.log(event.target.files[0].name)
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ Profilelimage: reader.result })
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }
    handlesave(){
       $.post('http://localhost:3000/editprofile',{IdFb: "",
       PhotosprofileUrl:this.state.Profilelimage,
       Firstname: this.state.firstname,
       Lastname: this.state.lastname,
       DateOfBirth : "",
       Biography:this.state.biograpthy,
       Location: this.state.location,
       Githubacountlink: this.state.githubaccount,
       Linkedincountlink: this.state.linkedinaccount,
       Websiteurl: this.state.website,
       Engineeringareas: this.state.engnchoice,
       Gender:this.state.selectedGender,
       Howcanwehelpyousucced: this.state.selectedchoise,
       Companyname: this.state.companyname,
       Jobtitle:this.state.jobtitle,
       YearsOfexperience: Number(this.state.yearsintech),
       Codingstackinuse: this.state.codingstuckinuse,
       Codingstacktolearn:  this.state.codingsticktolearn,
       }).then( (response) =>{
            console.log( "res from server:",response.Savedata.Firstname);
          alert("Profile is  Saved with succes")
          }).then((response) => { this.props.addnewprofile(response.Savedata.PhotosprofileUrl,response.Savedata.Firstname,response.Savedata.Biography,response.Savedata.Githubacountlink,response.Savedata.Linkedincountlink,response.Savedata.Websiteurl)})
          .catch( (error) =>{
            console.log("errorfromser:",error);
          });
    }


    /*PhotosprofileUrl:"",
        Firstname:"",
        Biography:"",
        Githubacountlink:"",
        Linkedincountlink:"",
        Websiteurl:"",
  };*/

    render() {
        return (
            <>
                <div className="edcolumn1">
                    
                    <Image borderRadius="full" boxSize="150px" src={this.state.Profilelimage} alt="My profile Image" />
                    <Input style={{ display: 'none' }} type="file" onChange={this.fileSelecHandler} ref={filein => this.filein = filein} /><br></br>
                    <Button colorScheme="teal" size="sm" onClick={() => this.filein.click()}>Add   photo </Button><br></br>
                    <hr />
                    <Button colorScheme="teal" size="sm" onClick={this.handlesave}> Save Profile</Button>
                </div>
                <br></br>
                <div className="edcolumn2">
                    <form>
                    <Text fontSize="3xl" color="black" as="cite" >About me</Text><br></br>
                    <hr />
                        <Text as="cite" color="#2B6CB0" >NAME  </Text><b></b>
                        <Input value={this.state.firstname} onChange={this.handleChange} name="firstname" variant="flushed" placeholder="First name" size="md"  />
                        <Input value={this.state.lastname} onChange={this.handleChange} name="lastname" variant="flushed" placeholder="Last name" size="md"  /><b></b>
                        <Text as="cite" color="#2B6CB0">GENDER </Text><b></b>
                        <FormControl as="fieldset">
                            <FormLabel as="legend">Select One  </FormLabel>
                            <RadioGroup defaultValue="Female">
                                <HStack spacing="24px">
                                    <Radio value="Female" checked={this.state.selectedGender === "Female"} onChange={this.ChangeGender} > Female</Radio>

                                    <Radio value="Male" onChange={this.ChangeGender} > Male</Radio>
                                    <Radio value="Other" onChange={this.ChangeGender}>Other</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl><b></b>
                        <Text as="cite" color="#2B6CB0">LOCATION </Text><b></b>
                        <Input value={this.state.location} onChange={this.handleChange} name="location" variant="flushed" placeholder="Location " size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">BIOGRAPHY </Text><b></b>
                        <Textarea value={this.state.biograpthy} onChange={this.handleChange} name="biograpthy" placeholder="I like to do..." size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">HOW CAN WE HELP YOU SUCCEED?</Text><b></b><b></b>
                        <Stack spacing={10} direction="row">
                            <Checkbox value="Employment Opportunities" onChange={this.Changechoice} colorScheme="blue" >Employment Opportunities</Checkbox>
                            <Checkbox value="Scholarships" onChange={this.Changechoice} colorScheme="blue" >Scholarships</Checkbox>
                            <Checkbox value="Career Coaching" onChange={this.Changechoice} colorScheme="blue" >Career Coaching</Checkbox>
                        </Stack><b></b>
                        <Stack spacing={10} direction="row">
                            <Checkbox value="Inspiration" onChange={this.Changechoice} colorScheme="blue" >Inspiration</Checkbox>
                            <Checkbox  value="Career Advancement" onChange={this.Changechoice} colorScheme="blue" >Career Advancement</Checkbox>
                            <Checkbox value="Leadership Opportunities" onChange={this.Changechoice} colorScheme="blue" >Leadership Opportunities</Checkbox>
                        </Stack><b></b>
                        <Text as="cite" color="#2B6CB0">WEBSITE </Text><b></b>
                        <Input value={this.state.website} onChange={this.handleChange} name="website" variant="flushed" placeholder="https://www... " size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">GITHUB </Text><b></b>
                        <Input value={this.state.githubaccount} onChange={this.handleChange} name="githubaccount" variant="flushed" placeholder="https://www... " size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">LINKEDIN </Text><b></b>
                        <Input value={this.state.linkedinaccoun} onChange={this.handleChange} name="linkedinaccount" variant="flushed" placeholder="https://www... " size="md" /><b></b>
                        <Text fontSize="3xl" color="black" as="cite" >My work</Text><br></br>
                        <hr />
                        <Text as="cite" color="#2B6CB0">WHERE DO YOU WORK?</Text><b></b>
                        <Input value={this.state.companyname} onChange={this.handleChange} name="companyname" variant="flushed" placeholder="Company Name " size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">JOB TITLE</Text><b></b>
                        <Input value={this.state.jobtitle} onChange={this.handleChange} name="jobtitle" variant="flushed" placeholder="Title " size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">HOW MANY YEARS HAVE YOU BEEN IN TECH?</Text><b></b>
                        <Input value={this.state.yearsintech} onChange={this.handleChange} name="yearsintech" variant="flushed" placeholder="Enter numbers of years" size="md" /><b></b>
                        <Text as="cite" color="#2B6CB0">WHAT ARE YOUR ENGINEERING AREAS OF INTEREST?</Text><b></b><b></b>
                        <Stack spacing={10} direction="row">
                            <Checkbox value="Architecture" onChange={this.ChangeEnngenchoice} colorScheme="blue" >Architecture</Checkbox>
                            <Checkbox value="Analytics" onChange={this.ChangeEnngenchoice} colorScheme="blue" >Analytics</Checkbox>
                            <Checkbox value="Data Science" onChange={this.ChangeEnngenchoice} colorScheme="blue" >Data Science</Checkbox>
                            <Checkbox value="Mobile" onChange={this.ChangechoicChangeEnngenchoicee} colorScheme="blue" >Mobile</Checkbox>
                            <Checkbox value="Web" onChange={this.ChangeEnngenchoice} colorScheme="blue" >Web</Checkbox>
                        </Stack><b></b>
                        <Text fontSize="3xl" color="black" as="cite" >My Interests</Text><br></br>

                        <Text as="cite" color="#2B6CB0">WHAT CODING STACK DO YOU USE PROFESSIONALLY? </Text><b></b>
                        <Select placeholder="Select option" onChange={this.Changestackinuse}>
                            <option value="JavaScript" >JavaScript</option>
                            <option value="c++ or Java" >c++ / Java</option>
                            <option value="Angular">Agular</option>
                            <option value="Vue">Vue</option>
                            <option value="Direct SQL">Direct SQL</option>
                            <option value="NO SQL databases">NO SQL databases </option>
                            <option value="Docker" >Docker</option>
                            <option value="Open to learn anything">Open to learn anything </option>
                            <option value="HTML/CSS">HTML/CSS</option>
                            <option value="Grails" >Grails</option>
                        </Select>
                        <Text as="cite" color="#2B6CB0">WHAT CODING STACK DO YOU WANT TO LEARN? </Text><b></b>
                        <Select placeholder="Select option" onChange={this.Changestacktolearn}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="c++ or Java">c++ / Java</option>
                            <option value="Angular">Agular</option>
                            <option value="Vue">Vue</option>
                            <option value="Direct SQL">Direct SQL</option>
                            <option value="NO SQL databases">NO SQL databases </option>
                            <option value="Docker">Docker</option>
                            <option value="Open to learn anything">React </option>
                            <option value="HTML/CSS">HTML/CSS</option>
                            <option value="Grails">Grails</option>
                        </Select>
                    </form><b></b>
                    <hr />
                    <footer className="footer">
                    </footer>
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => {

    return {datas: state}
  };
 const mapDispatchToProps = (dispatch) => {
    return {
      addnewprofile: (PhotosprofileUrl ,Firstname, Biography,Githubacountlink ,Linkedincountlink,Websiteurl) => {
        dispatch(addprofileaction(PhotosprofileUrl ,Firstname, Biography,Githubacountlink ,Linkedincountlink,Websiteurl))
      }
    }
  };
const Container = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default Container

