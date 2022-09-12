const mongoose = require("mongoose");
const { Schema } = mongoose;

const inscrito = new Schema(
  {
    idUser: {
      type: Schema.ObjectId,
      ref: "usuarios",
    },
  },
  { timestamps: true }
);

const rankingSchema = mongoose.Schema(
  {
    allInscritos: [inscrito],
    idCompeticion: {
      type: Schema.ObjectId,
      ref: "competiciones",
    },

    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    titulo: {
      type: String,
      maxlength: 40,
      required: true,
    },
    fechaPartido: {
      type: Date,
      required: true,
    },
    maxNumParticipantes: {
      type: Number,
      required: true,
    },
    estado: {
      type: String,
      maxlength: 40,
      required: true,
    },
    inscritos: {
      type: Array,
      default: [],
    },
    partidos: {
      type: Array,
      default: [],
    },
  },
  { timestamps: false }
);

const Inscripciones = mongoose.model("inscripciones", rankingSchema);

module.exports = Inscripciones;
