"use client"

import {useEffect, useState } from 'react'

interface ThemeSwitcherProps {
  themes: string[]
}

// CREATE A ARRAY BASED ON THE INTERFACE
const theme = [
    'black',
    'dark',
    'light',
    'system',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
]

export default function Usersettings(){
    const [themeIndex, setThemeIndex] = useState(0)
    const toggleTheme = (index: number) => {
        setThemeIndex(index)
    }
    useEffect(() => {
        const htmlElement = document.querySelector('html')
        if (htmlElement){
            htmlElement.setAttribute('data-theme', theme[themeIndex])
        }
    }, [themeIndex, theme])

    return(
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Settings</h1>
        <div className="flex items-center mb-4">
          <label htmlFor="theme-select" className="mr-2">
            Theme:
          </label>
            <select
                id="theme-select"
                className="select select-bordered select-accent"
                value={themeIndex}
                onChange={(e) => toggleTheme(Number(e.target.value))}
            >
                {theme.map((theme, index) => (
                    <option key={theme} value={index}>
                        {theme.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
      </div>
    )
}