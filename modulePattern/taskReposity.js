var Repo = function()
{
    return{
        get: function(id) {
            console.log('getting new task from db: ' +id)
            return{
                name:id
            }
        },
        set: function(task){
            console.log('saving to db: '+task.name)
        }
    }
}

module.exports = Repo;