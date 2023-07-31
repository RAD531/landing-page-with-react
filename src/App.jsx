import React from 'react';
import { Saludo } from './Saludo'; // export 
import Heading from './Heading'; // export by default
import Image from './Image';
import List from './List';
import ItemList from './ItemList';


const App = () => {
    return (
        <>
            <Saludo />
            <Heading />
            <Image src={"https://picsum.photos/id/666/800/800"} alt="Bosque" width={400} height={400} />
            <img src="" alt="" width="" height="" />

            <List>
                <ItemList>HTML</ItemList>
                <ItemList>CSS</ItemList>
                <ItemList>Javascript</ItemList>
            </List>

            {/* <section id="home">
                <Layout>
                    <Header />
                    <Main>
                        <h1>Home</h1>
                    </Main>
                    <Footer />
                </Layout>
            </section>


            <section id="about">
                <Layout>
                    <Header />
                    <Main>
                        <h1>About</h1>
                    </Main>
                    <Footer />
                </Layout>
            </section> */}

        </>
    )
}

export default App;