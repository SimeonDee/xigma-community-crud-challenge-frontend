import { React, Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { post, fetchAll } from './fake-data'
import toastr  from 'toastr'
import {BACKEND_API_SERVER} from '../../config/env'

export default class AddMember extends Component{
    constructor(props){
        super(props)

        this.onChangeFullname = this.onChangeFullname.bind(this)
        this.onChangeInstitution = this.onChangeInstitution.bind(this)
        this.onChangeLevel = this.onChangeLevel.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.getGenderState = this.getGenderState.bind(this)

        this.state = {
            fullname: '',
            institution: '',
            level: '',
            gender: '',
        }
    }

    onChangeFullname(e){
        this.setState({
            fullname: e.target.value
        })
    }

    onChangeInstitution(e){
        this.setState({
            institution: e.target.value
        })
    }

    onChangeLevel(e){
        this.setState({
            level: e.target.value
        })
    }

    onChangeGender(e){
        this.setState({
            gender: e.target.value
        })
    }
    
    async onClickSubmit(e){
        e.preventDefault()
        // const response = post(this.state)
        // this.setState({
        //     fullname: '',
        //     institution: '',
        //     level: '',
        //     gender: '',
        // })

        // toastr.success(response.message)
        // document.getElementById('fullname').focus()
        // console.log(fetchAll())
        
       try {
           // Sending data to API
            const response = await axios.post(`${BACKEND_API_SERVER}/members`, this.state)
            if(response.status === 201){
                // Reset State
                this.setState({
                    fullname: '',
                    institution: '',
                    level: '',
                    gender: '',
                })

                document.getElementById('fullname').focus()
                toastr.success(response.data.message)

            } else{
                toastr.info(response.data.message)
            }

       } catch (err) {
           toastr.error(err.message)
       }

    }

    getGenderState(){
        if(this.state.gender.toUpperCase() === "MALE"){
            return true
        } else{
            return false
        }
    }
    

    render(){
        return(
            <div className="content">
                <Link to='/members' className='link' style={{textDecoration: "none"}}> &lt;&lt; Back to Members</Link>
                <h3 className="content-subtitle">Add New Member to Xigma Community</h3>
                
                <form className="form">
                    <div className="form-group">
                        <input className="form-control form-control-lg" placeholder="Fullname" type="text" 
                        name="fullname" id="fullname" onChange={this.onChangeFullname} 
                        value={this.state.fullname} />    
                    </div>
                    
                    <div className="form-group">
                        <input className="form-control form-control-lg" placeholder="Institution" type="text" 
                        name="institution" id="institution" onChange={this.onChangeInstitution} 
                        value={this.state.institution} />    
                    </div>

                    <div className="form-group">
                        <input className="form-control form-control-lg" placeholder="Level" type="text" 
                        name="level" id="level" onChange={this.onChangeLevel} value={this.state.level} />    
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div class="custom-control custom-radio custom-control-inline px-3">
                                <input type="radio" id="customRadioInline1" value="Male" name="gender" 
                                class="custom-control-input" onChange={this.onChangeGender} 
                                checked={this.getGenderState()} />&nbsp;&nbsp;&nbsp;
                                <label class="custom-control-label" htmlFor="customRadioInline1"> Male </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline px-3">
                                <input type="radio" id="customRadioInline2" value="Female" name="gender" 
                                class="custom-control-input" onChange={this.onChangeGender} 
                                checked={!this.getGenderState()}/>&nbsp;&nbsp;&nbsp;
                                <label class="custom-control-label" htmlFor="customRadioInline2"> Female </label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="form-group">
                        <input className="btn btn-primary" type="button" value="Add Member" onClick={this.onClickSubmit}/>
                    </div>
                </form>
            </div>

        )
    }
}