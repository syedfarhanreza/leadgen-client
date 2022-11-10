import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('LeadGen-Blogs');
    return (
        <div>
            <div className="card w-11/12 bg-black text-white-content mt-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Q1. Difference between SQL and NoSQL</h2>
                    <p> <h1 className='font-bold'>SQL:</h1>
                        SQL databases are classified as Relational databases, i.e., RDBMS.
                        SQL databases use standard Structured Query Languages, as the name suggests.
                        SQL is an industry-standard and very powerful language to execute complex queries.
                        SQL databases can extend their capacity on a single server by increasing their RAM, CPU or SSD.
                        SQL databases are scalable vertically, as their storage could be increased for the same server by enhancing their storage components.
                    </p>
                    <p>
                        <h1 className='font-bold'>NoSQL:</h1>
                        NoSQL databases are known as non-relational or distributed database.NoSQL database has dynamic schema for unstructured data. The data stored in a NoSQL database is not structured.
                        Data could be stored as document-oriented, column oriented, graph-based or organized as a Key-Value store. The syntax can vary from database to database.
                        In order to increase the capacity of a NoSQL database, you would have to install new servers parallel to the parent server.
                        NoSQL databases are horizontally scalable which means they can easily handle more traffic by adding new servers to the database, which makes them a great choice for large and constantly changing databases.
                    </p>
                </div>
            </div>
            <div className="card w-11/12 bg-black text-white-content mt-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Q2. What is JWT, and how does it work?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                </div>
            </div>
            <div className="card w-11/12 bg-black text-white-content mt-10 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Q3. What is the difference between javascript and Node JS?</h2>
                    <p>
                        <h1 className='font-bold'>JavaScript</h1>
                        <ul>
                            <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
                            <li>It's a programming language, after all. Any browser with a competent browser engine will operate.</li>
                            <li>It's most commonly used on client-side servers.</li>
                            <li>The node community does not care about JavaScript.</li>
                        </ul>
                    </p>
                    <p>
                        <h1 className='font-bold'>Node.js</h1>
                        <ul>
                            <li>It's a bridge, open-source Js runtime environment for executing Js on the server.</li>
                            <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</li>
                            <li>It's mainly popular on the server-side.</li>
                            <li>All node projects represent the JavaScript community.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="card w-11/12 bg-black text-white-content mt-10 mx-auto mb-10">
                <div className="card-body">
                    <h2 className="card-title">Q4. How does Node JS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    </p>
                    <p>
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;