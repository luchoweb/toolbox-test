import { SearchComponent } from "./Search"

export const HeaderComponent = () => {
  return (
    <header className="bg-danger pt-3 pb-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-8 mb-3 mb-md-0">
            <h1 className="m-0 text-light display-6 text-center text-md-start">
              Full-Stack Challenge
            </h1>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <SearchComponent />
          </div>
        </div>
      </div>
    </header>
  )
}
