import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { categories } from "..components/quizdata";



function GeographyQuiz(){
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["New York", "London", "Paris", "Dublin"],
            correct: "Paris",
        },
        {
            question: "Where is the Great Barrier Reef located?",
            options: ["Australia", "Canada", "Cuba", "The Bahamas"],
            correct: "Australia",
        },
        {
            question: "What continent is the only one to span all four hemispheres?",
            options: ["Australia", "Asia", "Africa", "Europe"],
            correct: "Africa",
        },
        {
            question: "How many countries have multiple cities?",
            options: ["7", "14", "6", "20"],
            correct: "14",
        },
    ];
}


export default function QuizData(){

}