# Country-App
For Users:
Displays all the country details after fetching from api.
1.Search for a country by typing the name and click submit button.(Avoid pressing Enter)
2.Spinner indicates that the site is loading data from api.
3.If after loading no country is displayed, then the query searched for is invalid.
4.To display all countries once again, clear search box and click submit.


For developers:
Frontend:
State management is done using redux and redux-thunk.
Store, actions, reducers are all available within redux folder under src.
API calls to backend is available inside api folder within redux folder under src.

Backend:
Routing is done in routes folder inside server directory.
API calls is done in api.js file.

Note: After forking run npm install within server and client direactories to install the packages.
