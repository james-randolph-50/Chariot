import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../actions/carActions';
import { deleteCar } from '../actions/carActions';
import CarForm from './CarForm';
import CarCard from '../components/CarCard';
import Cars from './Cars';
import LikeButton from '../components/LikeButton';
import { likeCar } from '../actions/carActions';