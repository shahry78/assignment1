Assignment Phase 1
Individual Assignment


S5067018
Muhammad Sheheryar Hassan 
Github:
Chat System has two folder which consists of all the client side and one server-side file which holds server-side code. I initialed with creating git files and then changes made on a regular basis to the master and pushed the upload the changes. 

Data Structures Used:

User Model
-	This has all the details about the users
-	It contains all the basic fields describing a user like a user's username, password, name email, etc.
-	This model is used to persist data into the 
Role Model
-	This model in relation to the User model helps to determine the level of authorization the user has
-	This contains various fields like Admin, Super Admin, and Normal User
-	Changing this value changes user authorization levels of the user and controls users access to the resource
Group Model
-	This model is responsible for storing group names of groups
-	It is in this model that channels are created
-	It can only be created by super admins
Channel Model
-	This model is responsible for storing channels under groups
-	It can be created by admins and super admins

Front End Architecture
Components
The major components of angular architecture to create the client-side of the application are:
-	Admin Component
-	Group Component
-	Chat Component
-	Home Component
-	Login Component
-	Profile Component
-	User Component

Services
-	Authentication Service
-	Memory Data Service
-	User Service
-	Group Service
Routes
The routes in the application correspond to the pages which form the major components of the application
-	Login Route
-	Home Route
-	Groups Route
-	Channels Route
-	Chat Route
-	Logout Route


Backend Architecture:
Node:
The Node Server is build using the express framework which is the minimal version of the node which gives a clear separation of routes, controllers, and services
The Node Server lists code in three hierarchies to form the Model and Controller part
The server lists routes, which call controllers which in turn take the help of services to run and visit the database
For Authentication, It makes use of Token technology (JWT). Upon login and signup, the server responds with a token which the client persists at its end and for every authenticated API requires the usage of those tokens by sending it along with every request
The Server then decrypts the token and verifies if it is indeed the correct one before responding with a response

Sockets:
The following diagram illustrates how a server facilitates communication between two clients over the socket protocol. A socket doesn't usually listen for connections that are incoming, it starts a connection that is outgoing, rather to the server. The server in turn creates a socket, and binds it to an IP address along with a port, it listens for connections to it later. When a client connects a new socket is created for communication further a polling mechanism is used to check for any activity to the open sockets

 
