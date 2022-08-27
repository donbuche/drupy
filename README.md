# Drupy theme

## Introduction
This is a responsive skeleton theme based on Bootstrap 5 and Webpack 4, ready for Drupal 9 websites.
The theme itself brings you very few CSS styles by default, so you will be able to extend it with your own styles.

However, some common implementations are included by default in the .theme file, to make easiest the process of developing a theme from a skeleton.

The main purpose of this theme is to allow you to build your custom theme without dependencies like base themes, showing a way to grow up your custom theme as required by your needs. And all managed by an excellent bundler like Webpack.

## How to use
The theme is self-documented about how to use it in each file, so pay attention to the inline comments you will find.
However, the following are a few tips to getting started.

Once downloaded, just type ```$ npm install``` in your terminal, (assuming you're in the root folder of the theme), and all node dependencies will be added to your theme.

Once all dependencies are properly installed, type ```$ npm run dev``` to let Webpack start watching for changes on your files automatically.

Other npm commands are available, please take a look on the scripts sections of the package.json.

## Requirements
This theme uses Webpack 4, so you must have previously installed Nodejs in your computer.

Nodejs version 13 is encouraged, as version 14 and newer introduces breaking changes). You can easily changes between Node versions if you install nvm (Node version manager) in your computer.

Follow the link for further information about nvm: https://github.com/nvm-sh/nvm
