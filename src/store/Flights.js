import { createSlice } from '@reduxjs/toolkit';
 let flights=[
    {
      id: 1,
      origin: 'Hyderabad',
      destination: 'Delhi',
      departureTime: '12:32',
      arrivalTime: '21:00',
      seats: [
        1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0,
        0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1,
        1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0, 0, 0, 0, 1, 0
      ]
    },
    {
      id: 2,
      origin: 'Lucknow',
      destination: 'Bangalore',
      departureTime: '15:10',
      arrivalTime: '21:42',
      seats: [
        1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0,
        1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 1, 0, 0, 0
      ]
    },
    {
      id: 3,
      origin: 'Hyderabad',
      destination: 'Delhi',
      departureTime: '08:41',
      arrivalTime: '15:04',
      seats: [
        1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0,
        1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1,
        0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0,
        1, 0, 0, 0, 0, 1
      ]
    },
    {
      id: 4,
      origin: 'Jaipur',
      destination: 'Pune',
      departureTime: '11:51',
      arrivalTime: '22:46',
      seats: [
        1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
        0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0
      ]
    },
    {
      id: 5,
      origin: 'Lucknow',
      destination: 'Chennai',
      departureTime: '16:57',
      arrivalTime: '20:48',
      seats: [
        0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
        0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0,
        1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        0, 0, 0, 0, 1, 0
      ]
    },
    {
      id: 6,
      origin: 'Jaipur',
      destination: 'Chennai',
      departureTime: '17:17',
      arrivalTime: '22:15',
      seats: [
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0,
        0, 0, 0, 0, 1, 0
      ]
    },
    {
      id: 7,
      origin: 'Lucknow',
      destination: 'Kolkata',
      departureTime: '00:38',
      arrivalTime: '12:56',
      seats: [
        1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0,
        1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1,
        1, 0, 0, 1, 1, 0
      ]
    },
    {
      id: 8,
      origin: 'Kolkata',
      destination: 'Jaipur',
      departureTime: '04:17',
      arrivalTime: '14:39',
      seats: [
        1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1,
        0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0,
        1, 0, 0, 0, 1, 0
      ]
    },
    {
      id: 9,
      origin: 'Kolkata',
      destination: 'Lucknow',
      departureTime: '20:20',
      arrivalTime: '23:35',
      seats: [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1,
        0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0,
        1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0,
        0, 1, 1, 1, 0, 0
      ]
    },
    {
      id: 10,
      origin: 'Ahmedabad',
      destination: 'Delhi',
      departureTime: '13:54',
      arrivalTime: '16:26',
      seats: [
        1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1,
        1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0,
        1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0,
        0, 0, 0, 1, 0, 1
      ]
    },
    {
      id: 11,
      origin: 'Lucknow',
      destination: 'Ahmedabad',
      departureTime: '05:46',
      arrivalTime: '19:36',
      seats: [
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
        1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1,
        1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0,
        0, 1, 0, 1, 1, 0
      ]
    },
    {
      id: 12,
      origin: 'Pune',
      destination: 'Delhi',
      departureTime: '06:23',
      arrivalTime: '19:20',
      seats: [
        0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1,
        0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
        1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 1, 1, 1, 0
      ]
    },
    {
      id: 13,
      origin: 'Lucknow',
      destination: 'Kolkata',
      departureTime: '07:03',
      arrivalTime: '13:37',
      seats: [
        1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,
        0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
        0, 1, 1, 0, 0, 0
      ]
    },
    {
      id: 14,
      origin: 'Mumbai',
      destination: 'Pune',
      departureTime: '08:01',
      arrivalTime: '23:26',
      seats: [
        1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0,
        0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0,
        1, 1, 1, 1, 0, 1
      ]
    },
    {
      id: 15,
      origin: 'Bangalore',
      destination: 'Delhi',
      departureTime: '08:30',
      arrivalTime: '08:46',
      seats: [
        0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1,
        0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0,
        1, 0, 1, 0, 0, 0
      ]
    },
    {
      id: 16,
      origin: 'Hyderabad',
      destination: 'Mumbai',
      departureTime: '01:31',
      arrivalTime: '14:01',
      seats: [
        1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
        0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0,
        1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
        1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
        0, 0, 1, 0, 0, 0
      ]
    },
    {
      id: 17,
      origin: 'Kolkata',
      destination: 'Mumbai',
      departureTime: '21:22',
      arrivalTime: '21:31',
      seats: [
        0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0,
        1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0,
        1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
        1, 1, 1, 0, 0, 1
      ]
    },
    {
      id: 18,
      origin: 'Kolkata',
      destination: 'Lucknow',
      departureTime: '19:24',
      arrivalTime: '19:42',
      seats: [
        1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1,
        1, 1, 0, 0, 0, 1
      ]
    },
    {
      id: 19,
      origin: 'Kolkata',
      destination: 'Jaipur',
      departureTime: '17:26',
      arrivalTime: '23:34',
      seats: [
        0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
        1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
        1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1,
        1, 0, 0, 0, 1, 1
      ]
    },
    {
      id: 20,
      origin: 'Kolkata',
      destination: 'Hyderabad',
      departureTime: '15:16',
      arrivalTime: '15:29',
      seats: [
        0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 1, 1, 0
      ]
    },
    {
      id: 21,
      origin: 'Pune',
      destination: 'Ahmedabad',
      departureTime: '23:31',
      arrivalTime: '23:50',
      seats: [
        0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1,
        0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
        0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
        1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 0
      ]
    },
    {
      id: 22,
      origin: 'Bangalore',
      destination: 'Lucknow',
      departureTime: '13:05',
      arrivalTime: '21:53',
      seats: [
        1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 1
      ]
    },
    {
      id: 23,
      origin: 'Lucknow',
      destination: 'Bangalore',
      departureTime: '04:02',
      arrivalTime: '18:43',
      seats: [
        0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1,
        1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,
        1, 0, 0, 1, 1, 0
      ]
    },
    {
      id: 24,
      origin: 'Chennai',
      destination: 'Bangalore',
      departureTime: '18:13',
      arrivalTime: '21:47',
      seats: [
        0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1,
        1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0,
        1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1,
        1, 1, 1, 1, 1, 1
      ]
    },
    {
      id: 25,
      origin: 'Jaipur',
      destination: 'Kolkata',
      departureTime: '18:13',
      arrivalTime: '19:59',
      seats: [
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1,
        1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1,
        0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0
      ]
    },
    {
      id: 26,
      origin: 'Chennai',
      destination: 'Bangalore',
      departureTime: '00:16',
      arrivalTime: '06:41',
      seats: [
        0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
        0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0,
        1, 0, 1, 0, 0, 1
      ]
    },
    {
      id: 27,
      origin: 'Kolkata',
      destination: 'Jaipur',
      departureTime: '07:06',
      arrivalTime: '21:50',
      seats: [
        0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1,
        1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1,
        1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0,
        1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1,
        0, 0, 0, 1, 1, 1
      ]
    },
    {
      id: 28,
      origin: 'Lucknow',
      destination: 'Jaipur',
      departureTime: '17:07',
      arrivalTime: '20:03',
      seats: [
        1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0,
        0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0,
        1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0,
        1, 1, 0, 0, 0, 0
      ]
    },
    {
      id: 29,
      origin: 'Pune',
      destination: 'Mumbai',
      departureTime: '03:22',
      arrivalTime: '23:38',
      seats: [
        0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0,
        1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
        1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1,
        1, 1, 1, 1, 1, 1
      ]
    },
    {
      id: 30,
      origin: 'Jaipur',
      destination: 'Chennai',
      departureTime: '02:41',
      arrivalTime: '16:00',
      seats: [
        1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0,
        1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1,
        1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 1, 0, 1, 0, 0
      ]
    },
    {
      id: 31,
      origin: 'Hyderabad',
      destination: 'Jaipur',
      departureTime: '17:37',
      arrivalTime: '22:27',
      seats: [
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
        1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1,
        0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 1, 1, 0, 1, 1
      ]
    },
    {
      id: 32,
      origin: 'Ahmedabad',
      destination: 'Hyderabad',
      departureTime: '08:13',
      arrivalTime: '10:17',
      seats: [
        0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 0, 0
      ]
    },
    {
      id: 33,
      origin: 'Pune',
      destination: 'Delhi',
      departureTime: '06:18',
      arrivalTime: '17:07',
      seats: [
        1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1,
        1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
        0, 1, 0, 0, 1, 1
      ]
    },
    {
      id: 34,
      origin: 'Delhi',
      destination: 'Bangalore',
      departureTime: '05:19',
      arrivalTime: '08:01',
      seats: [
        1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0,
        1, 0, 0, 1, 0, 0
      ]
    },
    {
      id: 35,
      origin: 'Bangalore',
      destination: 'Kolkata',
      departureTime: '01:24',
      arrivalTime: '21:13',
      seats: [
        1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1,
        1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1,
        1, 1, 1, 1, 1, 1
      ]
    },
    {
      id: 36,
      origin: 'Delhi',
      destination: 'Mumbai',
      departureTime: '18:36',
      arrivalTime: '19:55',
      seats: [
        0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1,
        1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 0
      ]
    },
    {
      id: 37,
      origin: 'Lucknow',
      destination: 'Ahmedabad',
      departureTime: '00:51',
      arrivalTime: '01:02',
      seats: [
        1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1,
        0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0,
        1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0,
        1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,
        0, 1, 1, 0, 1, 1
      ]
    },
    {
      id: 38,
      origin: 'Chennai',
      destination: 'Pune',
      departureTime: '23:16',
      arrivalTime: '23:51',
      seats: [
        1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,
        1, 1, 0, 1, 0, 0
      ]
    },
    {
      id: 39,
      origin: 'Hyderabad',
      destination: 'Chennai',
      departureTime: '03:51',
      arrivalTime: '17:55',
      seats: [
        1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
        1, 0, 1, 1, 1, 0
      ]
    },
    {
      id: 40,
      origin: 'Delhi',
      destination: 'Pune',
      departureTime: '13:23',
      arrivalTime: '16:46',
      seats: [
        1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0,
        1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1,
        1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0,
        0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0,
        1, 0, 0, 1, 0, 0
      ]
    },
    {
      id: 41,
      origin: 'Hyderabad',
      destination: 'Bangalore',
      departureTime: '09:28',
      arrivalTime: '12:05',
      seats: [
        1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
        1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
        1, 0, 1, 1, 0, 1
      ]
    },
    {
      id: 42,
      origin: 'Delhi',
      destination: 'Jaipur',
      departureTime: '19:27',
      arrivalTime: '20:49',
      seats: [
        0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1,
        0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0,
        1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0
      ]
    },
    {
      id: 43,
      origin: 'Chennai',
      destination: 'Pune',
      departureTime: '03:27',
      arrivalTime: '18:00',
      seats: [
        1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1,
        0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0,
        0, 1, 1, 1, 1, 0
      ]
    },
    {
      id: 44,
      origin: 'Bangalore',
      destination: 'Kolkata',
      departureTime: '07:04',
      arrivalTime: '14:05',
      seats: [
        0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
        0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0,
        1, 0, 1, 1, 1, 0
      ]
    },
    {
      id: 45,
      origin: 'Bangalore',
      destination: 'Pune',
      departureTime: '01:43',
      arrivalTime: '05:16',
      seats: [
        0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1,
        0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0,
        0, 1, 1, 1, 0, 0
      ]
    },
    {
      id: 46,
      origin: 'Kolkata',
      destination: 'Hyderabad',
      departureTime: '18:19',
      arrivalTime: '23:59',
      seats: [
        0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1,
        0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1,
        1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1,
        0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0,
        1, 1, 1, 0, 0, 1
      ]
    },
    {
      id: 47,
      origin: 'Bangalore',
      destination: 'Pune',
      departureTime: '18:19',
      arrivalTime: '20:39',
      seats: [
        0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1,
        0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0,
        0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 1, 0
      ]
    },
    {
      id: 48,
      origin: 'Hyderabad',
      destination: 'Bangalore',
      departureTime: '10:31',
      arrivalTime: '23:22',
      seats: [
        1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1,
        1, 1, 0, 1, 0, 1
      ]
    },
    {
      id: 49,
      origin: 'Bangalore',
      destination: 'Kolkata',
      departureTime: '03:27',
      arrivalTime: '16:06',
      seats: [
        0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
        0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 1, 1
      ]
    },
    {
      id: 50,
      origin: 'Bangalore',
      destination: 'Kolkata',
      departureTime: '20:48',
      arrivalTime: '23:59',
      seats: [
        0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1,
        0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0,
        0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1,
        1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1,
        0, 1, 1, 1, 1, 0
      ]
    }
  ]


  const initialFlightsState = {
     flights:flights
}

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: initialFlightsState,
  reducers: {
    updateFlights(state,action){
      state.flights=action.payload;
    },
    updateSeats(state,action){
        const { id, newseats } = action.payload;
        state.flights[id-1].seats = newseats;
    }
    
  },
});

export const { updateFlights,updateSeats } = flightsSlice.actions;
export default flightsSlice.reducer;
