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

const Routes = () => {
  return (
    <Router>
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
