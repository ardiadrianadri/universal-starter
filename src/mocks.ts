export const mocks = [{
    url: '/service/menu',
    middleware: (req,res) => {
        let menu = {
            title:'Angular Universal Starter',
            options: [{
                title:'Home',
                route:'home'
            },{
                title:'Second',
                route:'second'
            }]
        }
        res.json(menu);
    }
},{
    url: '/service/contacts',
    middleware: (req, res) => {
        let contact = [{
            name: 'Aristotle',
            email: 'guyOfCenter@think.ant',
            twitter:'@likechildren'
        },{
            name:'Plato',
            email:'thecavern@think.ant',
            twitter:'@meking'
        },{
            name:'Paul of Tarsus',
            email:'religonTeacher@think.ant',
            twitter:'@firstpope'
        },{
            name:'Rene Descartes',
            email:'seeToNotBelevie@think.ant',
            twitter:'@IthinkThereforeheadeach'
        },{
            name:'Confucius',
            email:'oneManOneVote@think.ant',
            twitter:'@goldenRule'
        }]

        res.json(contact);
    }
}]