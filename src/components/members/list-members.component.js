import {Component} from 'react'
// import {fetchAll, deleteMember, data } from './fake-data'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {BACKEND_API_SERVER} from '../../config/env'
import toastr from 'toastr'

function MembersTable(props){
        if(props.members?.length > 0){
            return (
                <div className="members-table">
                    <table className="table table-even">
                        <thead>
                            <tr>
                                <th>S/No</th> 
                                <th>Name</th> 
                                <th>Gender</th> 
                                <th>Institution</th> 
                                <th>Level</th> 
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.members.map((element, idx) => 
                                    <MemberRow element={element} sno={idx+1} deleteElement={props.deleteElement} key={element._id} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                <div className="text-lg text-b">
                    No Member(s) yet...
                </div>
            )
        }
}

function MemberRow(props){
    return (
        <tr>
            <td>{props.sno}</td>
            <td>{props.element.fullname}</td>
            <td>{props.element.gender}</td>
            <td>{props.element.institution}</td>
            <td>{props.element.level}</td>
            <td>
                <Link className="link" to={`/members/update/${props.element._id}`}>edit</Link>&nbsp; | &nbsp;
                <Link to="#" className="link" onClick={() => props.deleteElement(props.element._id)}>delete</Link>
            </td>
        </tr>

    )
}

export default class ListMembers extends Component{
    constructor(props){
        super(props)

        this.deleteElement = this.deleteElement.bind(this)
        this.showAllMembers = this.showAllMembers.bind(this)

        this.state = {
            members: []
        }
    }

    async componentDidMount(){
        // this.setState({members: fetchAll()})

        try {
            const response = await axios.get(`${BACKEND_API_SERVER}/members`)
            // const result = await response.json()
            toastr.options.hideMethod = 'slideUp';
            if(response.status === 200){
                const { data } = response.data
                
                // Load State data
                this.setState({
                    members: data,
                })

            } else{
                
                toastr.warning(response.data.message)
            }    

        } catch (err) {
            toastr.error(err.message)
        }
    }

    async deleteElement(id){
        // deleteMember(id)
        try {
            if(window.confirm("Are you sure you want to permanently delete member?", "Delete Member")){
                // Making ajax request for data from Backend API
                const response = await axios.delete(`${BACKEND_API_SERVER}/members/${id}`)
                if(response.status === 200){
                    // Update Member list State data
                    this.setState({
                        members: this.state.members.filter(element => element._id !== id ),
                    })

                    toastr.success(response.data.message)
                    
                } else{
                    toastr.info(response.data.message)
                }    
            }
            
        } catch (err) {
            toastr.error(err.message)
        }  
    }

    showAllMembers(){
        return <MembersTable members={this.state.members} deleteElement={this.deleteElement} />
    }

    render(){
        return (
            <div className="content">
                
                <div>
                    {/* <span className="add-new-member-icon"><Link className="link-add-icon" to="/members/add">ADD </Link> </span> */}
                    
                    <Link className="link-add-icon" to="/members/add"> <div className="member-add-new-icon">+</div></Link>
                    <h3 className="members-main-subtitle">List of Community Members <span className="hero">{this.state.members.length}</span></h3>
                    
                </div>

                {
                    this.showAllMembers()
                }

            </div>
        )
    }
}