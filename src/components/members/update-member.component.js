import { React, Component } from 'react'
import axios from 'axios'
// import { update, fetch } from './fake-data'
import toastr from 'toastr'
import {BACKEND_API_SERVER} from '../../config/env'

export default class UpdateMember extends Component{
    constructor(props){
        super(props)

        this.onChangeFullname = this.onChangeFullname.bind(this)
        this.onChangeInstitution = this.onChangeInstitution.bind(this)
        this.onChangeLevel = this.onChangeLevel.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onClickUpdate = this.onClickUpdate.bind(this)
        this.getGenderState = this.getGenderState.bind(this)

        this.state = {
            fullname: '',
            institution: '',
            level: '',
            gender: '',
        }
    }

    async componentDidMount(){
        try {
            const id = this.props.match.params.id
            // const result = fetch(id)
            const response = await axios.get(`${BACKEND_API_SERVER}/members/${id}`)
            
            if(response.status === 200){
                const member = response.data.data
                if(member){
                    this.setState({
                        fullname: member.fullname,
                        institution: member.institution,
                        gender: member.gender,
                        level: member.level
                    })
                }
            }

        } catch (err) {
            toastr.error(err.message)
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
    
    async onClickUpdate(e){
        e.preventDefault()
        // const id = this.props.match.params.id
        // const response = update(id, this.state)
        // toastr.success(response.message)

        try {
            // Sending an Update Request to API
            const id = this.props.match.params.id
            const response = await axios.patch(`${BACKEND_API_SERVER}/members/${id}`, this.state)

            if(response.status === 200){
                
                // Reset State
                this.setState({
                    fullname: '',
                    institution: '',
                    level: '',
                    gender: '',
                })

                toastr.success(response.data.message)
                this.props.history.push('/members',{})

            } else{
                toastr.info(response.data.message)
            }
            
        } catch (err) {
            toastr.error(err.message)
        }
        
        //Go back to member-list page
        // console.log(this.props)
        // this.props.history.goBack()
        // this.props.history.push('/members',{})
        
    }

    getGenderState(){
        if(this.state?.gender?.toUpperCase() === "MALE"){
            return true
        } else{
            return false
        }
    }
    

    render(){
        return(
            <div className="content">
                <h3 className="content-subtitle">Update Member Details</h3>

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
                        <input className="btn btn-primary" type="button" value="Update Record" onClick={this.onClickUpdate}/>
                    </div>
                </form>
            </div>

        )
    }
}