import Pagination from 'react-bootstrap/Pagination';
import {useState,useContext} from "react";


function AdvancedExample({count, Pokemones}) {
        const [statePage, setPage] = useState(1);
        const lastPage = Math.ceil(count/15)
        function PaginationNext(){
            // eslint-disable-next-line no-unused-expressions
            const num = statePage+1
            setPage(num)
            Pokemones(num)
        }
        function PaginationPrev(){
            console.log(statePage)
            if (statePage>1){
                const num = statePage-1
                setPage(num)
                Pokemones(num)
            }
        }

        function PaginationLast(){
            setPage(lastPage)
            Pokemones(lastPage)
        }
        function PaginationFirst(){
            setPage(1)
            Pokemones(1)
        }

        function BtnPagination(number){
            console.log(number)
            const num = statePage+number
            setPage(number+statePage)
            Pokemones(num)
        }


        return (
        <Pagination className="m-4 centrado">
            <Pagination.First onClick={PaginationFirst}/>
            <Pagination.Prev  onClick={PaginationPrev} disabled={!(statePage>1)} />
            <Pagination.Item active>{statePage}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item onClick={()=>BtnPagination(10)}>{10 + statePage}</Pagination.Item>
            <Pagination.Item onClick={()=>BtnPagination(11)}>{11 + statePage}</Pagination.Item>
            <Pagination.Item onClick={()=>BtnPagination(12)}>{12 + statePage}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{lastPage}</Pagination.Item>
            <Pagination.Next onClick={PaginationNext} />
            <Pagination.Last onClick={PaginationLast}/>
        </Pagination>
    );
}

export default AdvancedExample;