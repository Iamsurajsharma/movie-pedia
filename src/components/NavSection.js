    import React, { Component } from 'react';
    import { Navbar, Nav, NavDropdown, Form, FormControl,Button,InputGroup,Dropdown,ButtonGroup} from 'react-bootstrap';

    class NavSection extends Component {
      constructor(){
        super()
        this.state={
            query:"",
            searchType:"/search/movies",
            label:"Movies"
        }

      }
      handleInput(e){
        this.setState({
          query: e.target.value
        })
      }
        onSubmit(){
          this.props.history.push(`${this.state.searchType}/${this.state.query}`)
      }
      
  onRadioBtnChange(eventKey,event){
    this.setState({
      label: eventKey,
      searchType: event.target.id
    })
  }
      
      render() {
        return (
          <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <div className="container">
                <Navbar.Brand href="/" >MoviePedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto">
                    <NavDropdown   title="Sort By" id="basic-nav-dropdown">
                     <NavDropdown.Header><span className="btn disabled font-weight-bolder text-success">Movies</span></NavDropdown.Header>
                    <NavDropdown.Item href="/movies/top-rated">Top Rated</NavDropdown.Item>
                    <NavDropdown.Item href="/movies/upcoming">Upcoming</NavDropdown.Item>
                    <NavDropdown.Item href="/movies/popular">Popular</NavDropdown.Item>

                    <NavDropdown.Header><span className="btn disabled font-weight-bolder text-success" >Tv Shows</span></NavDropdown.Header>   
                      <NavDropdown.Item href="/tv/top-rated" >Top Rated</NavDropdown.Item>
                    <NavDropdown.Item href="/tv/on-air">On Air</NavDropdown.Item>
                    <NavDropdown.Item href="/tv/popular">Popular</NavDropdown.Item>
            
                </NavDropdown>
                    <Form onSubmit={this.onSubmit.bind(this)} inline>
                    <InputGroup>
                    
                      <FormControl type="text" placeholder="Search" className="mr-2" onChange={this.handleInput.bind(this)} value={this.state.query} />
                      
                      <Dropdown as={ButtonGroup}>
                          <Dropdown.Toggle split variant="outline-light" id="dropdown-split-basic">{this.state.label}  </Dropdown.Toggle>

                          <Dropdown.Menu>
                          {['radio'].map(type => (
                    <div key={`inline-${type}`}>
                   <Dropdown.Item eventKey="Movies" id="/search/movies" onSelect={this.onRadioBtnChange.bind(this)}>Movies</Dropdown.Item>
                      <Dropdown.Item eventKey="Tv-Shows" id="/search/tv-shows" onSelect={this.onRadioBtnChange.bind(this)} >Tv-Shows</Dropdown.Item>
                      <Dropdown.Item  eventKey="Persons" id="/search/persons" onSelect={this.onRadioBtnChange.bind(this)}>Persons</Dropdown.Item>
                    </div>
                  ))}
                          </Dropdown.Menu>
                        </Dropdown>
                        
                      <Button  className="ml-2" type="submit" variant="outline-success">Search</Button>
                    </InputGroup>
                    </Form>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
          </div>
        ) 
      }
    }

    export default NavSection;