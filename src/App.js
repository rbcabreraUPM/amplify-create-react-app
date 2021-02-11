import Navigationbar from './components/Navigationbar.js'
import ProfileFooter from './components/ProfileFooter.js'
import ProfileJumbotron from './components/profile/ProfileJumbotron.js'
import SkillsSection from './components/profile/SkillsSection.js'
import ExperienceSection from './components/profile/ExperienceSection.js'
function App() {
  return (
    <div className='App'>
      <Navigationbar></Navigationbar>
      <ProfileJumbotron></ProfileJumbotron>
      <SkillsSection></SkillsSection>

      <ExperienceSection></ExperienceSection>
      <ProfileFooter></ProfileFooter>
    </div>
  )
}

export default App
