const plants = require('../data.json')

const list = {items: []}
let listId = 0


module.exports = {
getList: (req, res) => {
    res.status(200).send(list)
},
addToList: (req, res) => {
    const {plantId} = req.body
   
    const index = list.items.findIndex((element) => element.id === +plantId)
    
    if(index === -1){
    const plant = plants.find((element) => element.id === plantId)
    

    plant.listId = +listId

    list.items.push(plant) 
    listId++
    }
    
     res.status(200).send(list)
      
     
   
},
changeWatered: (req, res) => {
    const {list_id} = req.params
    const { action } = req.query
    
    const index = list.items.findIndex((element) => element.listId === +list_id)
    if(action === 'clicked' && list.items[index].watered === 'No' ){
        list.items[index].watered = 'Yes' 
    } else if(action === 'clicked' && list.items[index].watered === 'Yes' ){
        list.items[index].watered = 'No' 
    }
    res.status(200).send(list)
},
removeFromList: (req, res) => {
    const { list_id } = req.params

    const index = list.items.findIndex((element) => element.listId === +list_id)
    list.items.splice(index, 1)
    
    res.status(200).send(list)
    
}



}

