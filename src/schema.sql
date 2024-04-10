# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type Booking {
  """Example field (placeholder)"""
  exampleField: Int!
}

type Product {
  """Example field (placeholder)"""
  exampleField: Int!
}

type ContactUs {
  """Example field (placeholder)"""
  exampleField: Int!
}

type Admin {
  """Example field (placeholder)"""
  exampleField: Int!
}

type Authentication {
  """Example field (placeholder)"""
  exampleField: Int!
}

type User {
  id: Int!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

type Query {
  bookings: [Booking!]!
  booking(id: Int!): Booking!
  products: [Product!]!
  product(id: Int!): Product!
  contactUs(id: Int!): ContactUs!
  admin(id: Int!): Admin!
  authentication(id: Int!): Authentication!
  users: [User!]!
  user(loginInput: LoginInput!): User!
}

input LoginInput {
  email: String!
  password: String!
}

type Mutation {
  createBooking(createBookingInput: CreateBookingInput!): Booking!
  updateBooking(updateBookingInput: UpdateBookingInput!): Booking!
  removeBooking(id: Int!): Booking!
  createProduct(createProductInput: CreateProductInput!): Product!
  updateProduct(updateProductInput: UpdateProductInput!): Product!
  removeProduct(id: Int!): Product!
  createContactUs(createContactUsInput: CreateContactUsInput!): ContactUs!
  updateContactUs(updateContactUsInput: UpdateContactUsInput!): ContactUs!
  removeContactUs(id: Int!): ContactUs!
  createAdmin(createAdminInput: CreateAdminInput!): Admin!
  updateAdmin(updateAdminInput: UpdateAdminInput!): Admin!
  removeAdmin(id: Int!): Admin!
  createAuthentication(createAuthenticationInput: CreateAuthenticationInput!): Authentication!
  updateAuthentication(updateAuthenticationInput: UpdateAuthenticationInput!): Authentication!
  removeAuthentication(id: Int!): Authentication!
  createUser(createUserInput: CreateUserInput!): User!
  updateUser(updateUserInput: UpdateUserInput!): User!
  removeUser(id: Int!): User!
}

input CreateBookingInput {
  """Example field (placeholder)"""
  exampleField: Int!
}

input UpdateBookingInput {
  """Example field (placeholder)"""
  exampleField: Int
  id: Int!
}

input CreateProductInput {
  """Example field (placeholder)"""
  exampleField: Int!
}

input UpdateProductInput {
  """Example field (placeholder)"""
  exampleField: Int
  id: Int!
}

input CreateContactUsInput {
  """Example field (placeholder)"""
  exampleField: Int!
}

input UpdateContactUsInput {
  """Example field (placeholder)"""
  exampleField: Int
  id: Int!
}

input CreateAdminInput {
  """Example field (placeholder)"""
  exampleField: Int!
}

input UpdateAdminInput {
  """Example field (placeholder)"""
  exampleField: Int
  id: Int!
}

input CreateAuthenticationInput {
  """Example field (placeholder)"""
  exampleField: Int!
}

input UpdateAuthenticationInput {
  """Example field (placeholder)"""
  exampleField: Int
  id: Int!
}

input CreateUserInput {
  id: Int!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  id: Int!
  firstName: String
  lastName: String
  email: String
  password: String
}