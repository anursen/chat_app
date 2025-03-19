import React, { useState } from 'react';
import ChatHistoryPanel from './components/ChatHistoryPanel';
import ChatInterface from './components/ChatInterface';
import BackendUpdatesPanel from './components/BackendUpdatesPanel';
import ConfigEditorPage from './components/ConfigEditorPage';

function App() {
  const [currentView, setCurrentView] = useState('chat');

  return (
    <div className="grid grid-cols-12 h-screen bg-gray-100">
      <div className="col-span-3 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <nav className="flex flex-col space-y-2">
            <button 
              onClick={() => setCurrentView('chat')}
              className={`px-4 py-2 rounded-lg text-left ${
                currentView === 'chat' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Chat Interface
            </button>
            <button 
              onClick={() => setCurrentView('config')}
              className={`px-4 py-2 rounded-lg text-left ${
                currentView === 'config' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Config Editor
            </button>
          </nav>
        </div>
        <ChatHistoryPanel />
      </div>
      
      <div className="col-span-6">
        {currentView === 'chat' ? <ChatInterface /> : <ConfigEditorPage />}
      </div>
      
      <div className="col-span-3 border-l border-gray-200">
        <BackendUpdatesPanel />
      </div>
    </div>
  );
}

export default App;
