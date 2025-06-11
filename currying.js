/*
Currying is when functions are chained, and the arguments are incrementally passed to the next function 
*/

let dragon = (name) => (size) => (element) =>
  name + 'is a ' + size + 'dragon that breathes ' + element;

console.log(dragon('fluffy')('small')('lightning'));

// QUIZ CHALLENGES ON FILTER FROM CURSOR

// ADVANCE
// Create a curried function that builds API URLs with parameters
// Example usage:
//buildURL('https://api.example.com')('users')('{id}')({id: 123, filter: 'active'})
// Returns 'https://api.example.com/users/123?filter=active'

const buildURL = (baseurl) => (route) => (template) => (params) => {
  const templateName = template.slice(1, -1);
  const templateValue = params[templateName];

  const { [templateName]: _, ...queryParams } = params;
  const queryString = new URLSearchParams(queryParams).toString();
  const queryValue = queryString ? '?' + queryString : '';

  return `${baseurl}/${route}/${templateValue}${queryValue}`;
};

// EXPERT

// Create a curried middleware system
// Example usage:
// const middleware = createMiddleware(authenticate)(validate)(log);
// middleware(request)(response) // Runs all middleware in sequence

const createMiddleware = (middleware) => (request) => (response) => {
  const middlewareResult = middleware(request)(response);

  if (middlewareResult.next) {
    return createMiddleware(middlewareResult.next)(request)(response);
  }
  return middlewareResult;
};

const authenticate = (request) => (response) => {
  if (request.user) {
    return { next: validate, request, response };
  }
  return { error: 'Unauthorized' };
};

const validate = (request) => (response) => {
  if (request.data) {
    return { next: log, request, response };
  }
  return { error: 'Invalid data' };
};

const log = (request) => (response) => {
  console.log(request, response);
  return { next: null, request, response };
};

// CURSOR IMPROVED SOLUTION

// 1. First, create a middleware chain builder
// const createMiddleware = (firstMiddleware) => {
//     // Store middleware in array
//     const middlewares = [firstMiddleware];

//     // Function to add more middleware
//     const chain = (nextMiddleware) => {
//         middlewares.push(nextMiddleware);
//         return chain;  // Return chain function for more additions
//     };

//     // Execute function that runs all middleware
//     chain.execute = (request) => (response) => {
//         // Run through middleware chain sequentially
//         return middlewares.reduce((result, middleware) => {
//             if (result.error) return result;  // Stop on error
//             return middleware(result.request || request)(result.response || response);
//         }, {});
//     };

//     return chain;  // Return chain function initially
// };

// // 2. Simpler middleware functions
// const authenticate = (request) => (response) => {
//     if (!request.user) return { error: 'Unauthorized' };
//     return { request, response };
// };

// const validate = (request) => (response) => {
//     if (!request.data) return { error: 'Invalid data' };
//     return { request, response };
// };

// const log = (request) => (response) => {
//     console.log('Request:', request);
//     return { request, response };
// };
