'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WithShimmer from './WithShimmer';

const files = {
  'project.rb': `+ class Project
+   has_many :tasks, dependent: :destroy
+   validates :name, presence: true
+   before_save :normalize_name
+ 
+   private
+ 
+   def normalize_name
+     self.name = name.strip.titleize
+   end
+ end`,

  'projects_controller.rb': `- class OldProjectsController < ApplicationController
-   def legacy
-     # legacy code removed
-   end
- end
+ class ProjectsController < ApplicationController
+   def index
+     @projects = Project.all
+   end
+ 
+   def show
+     @project = Project.find(params[:id])
+   end
+ end`,

  'index.html.erb': `+ <% @projects.each do |project| %>
+   <div class="project">
+     <%= project.name %>
+   </div>
+ <% end %>`,
};

const fakeGit = {
  commit: 'c91f23a',
  branch: 'main',
  timestamp: '3 minutes ago',
  additions: 3,
};

const IDEMock = ({ loading = false }: { loading?: boolean }) => {
  const [activeFile, setActiveFile] =
    useState<keyof typeof files>('project.rb');
  const lines = files[activeFile].split('\n');

  return (
    <motion.div
      className='relative w-full max-w-3xl rounded-lg border border-gray-800 bg-black text-green-400 shadow-xl font-mono text-sm overflow-hidden'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Tabs */}
      <div className='flex border-b border-gray-700 bg-gray-900 text-xs text-white font-semibold'>
        {Object.keys(files).map(file => (
          <button
            key={file}
            onClick={() => setActiveFile(file as keyof typeof files)}
            className={`px-4 py-2 transition-all border-b-2 ${
              activeFile === file
                ? 'border-blue-500 bg-gray-800 text-blue-300'
                : 'border-transparent hover:bg-gray-800 hover:text-blue-200'
            }`}
          >
            {file}
          </button>
        ))}
      </div>

      {/* Code Block with Gutter */}
      <WithShimmer loading={loading}>
        <div className='relative flex px-5 py-4 pb-16 mb-8 whitespace-pre text-sm leading-relaxed max-h-72 overflow-y-auto overflow-x-auto'>
          {/* Gutter */}
          <div className='pr-4 text-right select-none text-gray-600'>
            {lines.map((_, i) => (
              <div key={i} className='leading-6'>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code lines with "+" diff marker */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeFile}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className='text-green-400'
            >
              {lines.map((line, i) => {
                const type = line.startsWith('+')
                  ? 'add'
                  : line.startsWith('-')
                    ? 'remove'
                    : 'neutral';

                const content = line.replace(/^(\+|-)/, '').trimStart();

                return (
                  <div key={i} className='leading-6 flex'>
                    <span className='w-4 mr-2 select-none text-green-500'>
                      {type === 'add' ? '+' : type === 'remove' ? '-' : ''}
                    </span>
                    <span
                      className={`${
                        type === 'add'
                          ? 'text-green-400'
                          : type === 'remove'
                            ? 'text-red-400'
                            : 'text-gray-400'
                      }`}
                    >
                      {content}
                    </span>
                  </div>
                );
              })}
              <motion.span
                className='inline-block animate-blink text-green-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                █
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
      </WithShimmer>

      {/* Git Status Footer */}
      <div className='absolute bottom-0 left-0 w-full bg-gray-900 text-xs text-green-300 border-t border-gray-700 px-4 py-2 flex justify-between items-center font-mono'>
        <div className='flex items-center gap-4'>
          <span className='text-blue-400'>✓</span>
          <span>
            {fakeGit.additions} additions &nbsp;•&nbsp; commit{' '}
            <span className='text-white'>{fakeGit.commit}</span>
          </span>
        </div>
        <div className='text-gray-500'>
          On <span className='text-white'>{fakeGit.branch}</span> &nbsp;•&nbsp;{' '}
          {fakeGit.timestamp}
        </div>
      </div>
    </motion.div>
  );
};

export default IDEMock;
