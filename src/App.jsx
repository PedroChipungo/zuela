import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GeneralDataProvider from './components/GlobalData/GlobalData';
import TutorialPage from './pages/SideBarOptionsPages/TutorialPage/TutorialPage';
import LayOut from './pages/LayOutPage/LayOut';
import PhoneticAlphabetPage from './pages/SideBarOptionsPages/PhoneticAlphabetPage/PhoneticAlphabetPage';
import PronunciationLessonPage from './pages/SideBarOptionsPages/PronunciationLessonPage/PronunciationLessonPage';
import ListeningLessonPage from './pages/SideBarOptionsPages/ListeningLessonPage/ListeningLessonPage';
import PageNotFound from './pages/PageNotFoundPage/PageNotFound';
import AudiosPage from './pages/SideBarOptionsPages/AudiosPage/AudiosPage';
import BooksPage from './pages/SideBarOptionsPages/BooksPage/BooksPage';
import MusicLyricsPage from './pages/SideBarOptionsPages/MusicLyricsPage/MusicLyricsPage';
import PostsPage from './pages/SideBarOptionsPages/PostsPage/PostsPage';
import StressedWordsPage from './pages/SideBarOptionsPages/StressedWordsPage/StressedWordsPage';
import FindWordsPage from './pages/SideBarOptionsPages/FindWordsPage/FindWordsPage';
import SelfPerceptionTestPage from './pages/SideBarOptionsPages/SelfPerceptionTestPage/SelfPerceptionTestPage';
import HistoryAndCulturePage from './pages/SideBarOptionsPages/HistoryAndCulturePage/HistoryAndCulturePage';
import BlogPage from './pages/BlogPage/BlogPage';
import SignUppage from './pages/SideBarOptionsPages/SignUpPage/SignUppage';
import TutorialIntroPage from './pages/SideBarOptionsPages/TutorialPage/TutrorialIntroPage/TutorialIntroPage';
import FirstStepPage from './pages/SideBarOptionsPages/TutorialPage/TurtorialSectioins/FirstStepPage';

function App() {
  return (
    <GeneralDataProvider>
      <Router>
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<HomePage />} />

          {/* Rotas com layout fixo */}
          <Route element={<LayOut />}>
            <Route path="/start/*" element={<TutorialPage />} />
            <Route path='/tutorial*' element={<TutorialPage/> }>
                  <Route path='firstStep' element={<FirstStepPage/>}/>
            </Route>
            <Route path="/tutorialIntro" element={<TutorialIntroPage />} />
            <Route path="/phoneticLessons" element={<PhoneticAlphabetPage />} />
            <Route path="/speakingSkill" element={<PronunciationLessonPage />} />
            <Route path="/listeningSkill" element={<ListeningLessonPage />} />
            <Route path="/audios" element={<AudiosPage />} />
            <Route path="/lyrics" element={<MusicLyricsPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/stressedWords" element={<StressedWordsPage />} />
            <Route path="/findWord" element={<FindWordsPage />} />
            <Route path="/selfPerceptionTest" element={<SelfPerceptionTestPage />} />
            <Route path="/history&Culture" element={<HistoryAndCulturePage />} />
            {/* Adicione mais rotas conforme necessário */}
          </Route>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/signUp" element={<SignUppage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </GeneralDataProvider>
  );
}

export default App;
