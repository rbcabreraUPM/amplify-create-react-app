import Navigationbar from './components/Navigationbar.js'
import ProfileFooter from './components/ProfileFooter.js'
import ProfileJumbotron from './components/profile/ProfileJumbotron.js'
import SkillsSection from './components/profile/SkillsSection.js'
import ExperienceSection from './components/profile/ExperienceSection.js'
import { Container } from 'react-bootstrap'
function App() {
  return (
    <div className='App'>
      <Navigationbar></Navigationbar>
      <ProfileJumbotron></ProfileJumbotron>
      <Container>
        <SkillsSection></SkillsSection>
      </Container>

      {/* <ExperienceSection></ExperienceSection> */}
    </div>
  )
}

export default App
