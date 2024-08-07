# Recently Played Songs Store

## Overview

This project provides an in-memory store for recently played songs. It can accommodate a fixed number of songs per user and ensures that only the most recently played songs are kept.

## Features

- Add songs to a user's recently played list.
- Retrieve the list of recently played songs for a user.
- Automatically removes the least recently played song when the capacity is reached.

## Prerequisites

Make sure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:

    bash
    git clone https://github.com/your-username/recently-played-store.git
    cd recently-played-store
    

2. Install dependencies:

    bash
    npm install
    

## Usage

### Adding a Song to Recently Played List

To add a song to a user's recently played list, use the following function:

```javascript
store.addSong(userId, song);