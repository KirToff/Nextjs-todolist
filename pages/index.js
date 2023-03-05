

export default function App(){
    const [todo, setTodo] = useState([
        {
            id:1,
            title: 'Купить молока',
            status: true
        },
            
       {
            id:1,
            title: 'Оплатить инернет',
            status: false
                
            },

    ])
    return <>
    <div className="App">
<Header/>
<AddTodo todo={todo} setTodo={setTodo}/>
    </div>
    </>
}