import Link from 'next/link'

export default function Home(){
    return (
        <div>           
            <div>
                <h1>
                    Aventuras
                </h1>
                <Link href="/moviesearch/">Movies Search</Link><br /><br />
                <Link href="/movies/">Movies</Link><br /><br />
                <Link href="/novarota/lotr/">Rota</Link> <br/><br/>            
            </div>
        </div>       
    )
}