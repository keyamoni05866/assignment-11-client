import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(()=>{
    document.title = " Toys Hub | Blogs";
},[])
    return (
        <div className='mt-4 mb-10'>
            <h1 className='text-2xl font-semibold'>1.What is an access token and refresh token? How do they work and where should we store them?</h1>
            <p className='text-lg'><span className='text-2xl underline font-semibold'>Answer:</span> 
            An access token and refresh token are used in authentication and authorization protocol to grant access to protected resources on behalf of a user or client application.
            <br />
            Here's the explanation of access and refresh token and how they work and where they stored:
          <br />
              <span className='text-xl underline font-semibold'>Access Token:</span>
              It is typically a string of characters and contains information about the user or client application, such as the User ID, permissions, and expiration time. Storing tokens in memory is common for web applications, where they typically stored in memory on the client or in an HTTP-only cookie.
              <br />
              <span className='text-xl underline font-semibold'>Refresh Token:</span>
               A refresh token is a long-lived credential that also issued by an authentication server during the authentication process. The refresh token is usually associated with a specific user or client application and can be used to request a new access token without requiring the user to reauthenticate. A common approach is to store the refresh token in secure HTTP-only cookie or using a secure storage mechanism provided by the operating system or programming language.
            
             </p>

             <h1 className='text-2xl font-semibold'>2.Compare between SQL and NoSQL.</h1>
            <p className='text-lg'><span className='text-2xl underline font-semibold'>Answer:</span>  <br />
             <span className='text-xl underline font-semibold'>SQL:</span>
           SQL database are primarily called RDBMS  or Relational Database. It is Structured query language(SQL). SQL database are table based database. Oracle, Postgres, MySQL and MS-SQL is SQL Database.Relational databases generally scale vertically by adding more resources to a single server.  Scaling horizontally across multiple servers can be more complex and may require additional tools.
              <br />
              <span className='text-xl underline font-semibold'>NoSQL:</span>
                NoSQL database are primarily called as Non-relational or distributed database. NoSQL is no declarative query language. NoSQL databases can be document based, key-value pairs, graph database. MongoDB , Redis, Neo4j, Cassandra, Hbase is NoSQl  databases. NoSQL databases are designed to scale horizontally. They can distribute data across multiple servers and handle large amounts of data and high traffic more easily. 
             </p>
             <h1 className='text-2xl font-semibold'>3.What is express.js? What is Nest.js?</h1>
            <p className='text-lg'><span className='text-2xl underline font-semibold'>Answer:</span>  <br />
             <span className='text-xl underline font-semibold'>Express.js:</span>
          Express.js is a minimal and flexible web application framework  for Node.js. It provides a rebust set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and rendering response.  
              <br />
              <span className='text-xl underline font-semibold'>Nest.js:</span>
               Nest.js is a server-side Node.js framework that's great for building highly testable and maintainable backend applications. It is built with TypeScript and follows the modular dependency-injection-driven architecture of Angular, which makes it highly testable and maintainable.
             </p>
             <h1 className='text-2xl font-semibold'>4.What is MongoDB aggregate and how does it work?</h1>
            <p className='text-lg'><span className='text-2xl underline font-semibold'>Answer:</span>  
             MongoDB's aggregation framework is a powerful tool used for data processing and analyzing data within
             a MongoDB collection.
             <br />
             Here's a breakdown of how MongoDB's aggregation framework works:
         
              <br />
              <span className='text-xl underline font-semibold'>a.Pipeline Concept:</span>
               Aggregations in MongoDB are performed a pipeline concept, where multiple stages are combined sequentially to process the data. Each stage takes the output of the previous stage as input and performs specific operations on it.
               <br />
               <span className='text-xl underline font-semibold'>b.Operators:</span>
               MongoDB aggregation framework provides wide range of operations that can be used within stages to perform specific operations. These operators include mathematical operations, logical operations, string operations, array operations and more.
             </p>
        </div>
    );
};

export default Blog;