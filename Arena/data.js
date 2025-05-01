var APP_DATA = {
  "scenes": [
    {
      "id": "0-arena",
      "name": "Arena",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.0008576584999993031,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.859503643913321,
          "pitch": 0.2915059343561719,
          "rotation": 2.356194490192345,
          "target": "1-arena-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-arena-",
      "name": "Arena 入口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4933247433065766,
        "pitch": -0.27543586398710573,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.17454441578363245,
          "pitch": 0.15222152081425833,
          "rotation": 0.7853981633974483,
          "target": "0-arena"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
