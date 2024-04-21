// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{uuidImage}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{uuidImage}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Tags" titleTo="tags" buttonLabel="New Tag" buttonTo="newTag">
        <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
        <Route path="/tags/{uuidTag}/edit" page={TagEditTagPage} name="editTag" />
        <Route path="/tags/{uuidTag}" page={TagTagPage} name="tag" />
        <Route path="/tags" page={TagTagsPage} name="tags" />
      </Set>
      <Route path="/gallery" page={GalleryPage} name="gallery" />
      <Route path="/photography" page={PhotographyPage} name="photography" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
