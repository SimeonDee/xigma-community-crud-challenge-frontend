let id_counter = 0
let data = [
    {
        _id: ++id_counter,
        fullname: "Anonymous1",
        gender: "Male",
        institution: "Fedpoffa",
        level: "ND 2"
    },
    {
        _id: ++id_counter,
        fullname: "Anonymous2",
        gender: "Female",
        institution: "Lens Poly",
        level: "ND 1"
    },
    {
        _id: ++id_counter,
        fullname: "Anonymous1",
        gender: "Male",
        institution: "Fedpoffa",
        level: "ND 2"
    },
    {
        _id: ++id_counter,
        fullname: "Anonymous2",
        gender: "Female",
        institution: "Lens Poly",
        level: "ND 1"
    }
]

// data = []

module.exports = {
    data: data,
    post: (record)=>{
        const newData = record
        newData._id = ++id_counter
        data.push(newData)
        return {status: 'success', message: 'Member Added'}
    },
    fetchAll: () => {
        console.log(`Size: ${data.length}`)
        return data
    },
    fetch: (id)=>{
        const foundMember = data.find((member) => member._id === Number.parseInt(id))
        return {status: 'success', message: 'Member Added', data: foundMember }
    },
    deleteMember: (id) => {
        data = data.filter((member) => member._id !== Number.parseInt(id))
        return {status: 'success', message: 'Member Deleted'}
    },
    update: (id, record)=>{
        const foundIndex = data.findIndex(member => member._id === Number.parseInt(id))
        console.log('Found Index')
        console.log(foundIndex)
        if(foundIndex > -1){
            data[foundIndex].fullname = record.fullname
            data[foundIndex].institution = record.institution
            data[foundIndex].level = record.level
            data[foundIndex].gender = record.gender

            return {status: 'success', message: 'Member Updated'}

        } else{
            return {status: 'failure', message: 'Member not found'}
        } 
    }

}