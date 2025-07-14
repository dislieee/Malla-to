const ramos = [
  // Primer Año
  { codigo: "PPSI", nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "BCG", nombre: "Biología Celular y Genética", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "QGO", nombre: "Química General y Orgánica", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "ITO", nombre: "Introducción a la Terapia Ocupacional", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "EFG", nombre: "Electivo Formación General", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "MAT", nombre: "Matemáticas", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "TOEI1", nombre: "Terapia Ocupacional y Estrategias de Intervención I", anio: 1, semestre: 1, prereqs: [] },

  { codigo: "PGE", nombre: "Psicología General y Evolutiva", anio: 1, semestre: 2, prereqs: ["PPSI"] },
  { codigo: "BIOQ", nombre: "Bioquímica", anio: 1, semestre: 2, prereqs: ["BCG", "QGO"] },
  { codigo: "MORF1", nombre: "Morfología I: Anatomía, Histología y Embriología", anio: 1, semestre: 2, prereqs: ["BCG"] },
  { codigo: "FEC", nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación", anio: 1, semestre: 2, prereqs: ["ITO"] },
  { codigo: "TOEI2", nombre: "Terapia Ocupacional y Estrategias de Intervención II", anio: 1, semestre: 2, prereqs: ["TOEI1"] },

  // Segundo Año
  { codigo: "PST", nombre: "Psicología Social y del Trabajo", anio: 2, semestre: 3, prereqs: ["PGE"] },
  { codigo: "ANT", nombre: "Antropología", anio: 2, semestre: 3, prereqs: ["PGE"] },
  { codigo: "MORF2", nombre: "Morfología II: Anatomía, Fisiología y Embriología", anio: 2, semestre: 3, prereqs: ["MORF1"] },
  { codigo: "FISGEN", nombre: "Fisiología General", anio: 2, semestre: 3, prereqs: ["BCG", "PGE"] },
  { codigo: "MPEO", nombre: "Modelos Pragmáticos del Estudio de la Ocupación", anio: 2, semestre: 3, prereqs: ["FEC"] },
  { codigo: "TOEI3", nombre: "Terapia Ocupacional y Estrategias de Intervención III", anio: 2, semestre: 3, prereqs: ["TOEI2"] },

  { codigo: "SMP", nombre: "Salud Mental y Psicoeducación", anio: 2, semestre: 4, prereqs: ["ANT"] },
  { codigo: "FISDS", nombre: "Fisiología de Sistemas", anio: 2, semestre: 4, prereqs: ["FISGEN"] },
  { codigo: "MEEO", nombre: "Modelos Emergentes del Estudio de la Ocupación", anio: 2, semestre: 4, prereqs: ["MPEO"] },
  { codigo: "ICST", nombre: "Investigación en Ciencias de la Salud", anio: 2, semestre: 4, prereqs: [] },
  { codigo: "TOEI4", nombre: "Terapia Ocupacional y Estrategias de Intervención IV", anio: 2, semestre: 4, prereqs: ["TOEI3"] },

  // Tercer Año
  { codigo: "FAR", nombre: "Farmacología", anio: 3, semestre: 5, prereqs: ["FISDS"] },
  { codigo: "FISPAT", nombre: "Fisiopatología", anio: 3, semestre: 5, prereqs: ["FAR"] },
  { codigo: "ANEU", nombre: "Alteraciones Neuromusculoesqueléticas", anio: 3, semestre: 5, prereqs: ["FISPAT"] },
  { codigo: "ICTO1", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I", anio: 3, semestre: 5, prereqs: ["ICST", "MEEO"] },
  { codigo: "TOEI5", nombre: "Terapia Ocupacional y Estrategias de Intervención V", anio: 3, semestre: 5, prereqs: ["TOEI4"] },

  { codigo: "ICTO2", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II", anio: 3, semestre: 6, prereqs: ["ICTO1"] },
  { codigo: "TOEI6", nombre: "Terapia Ocupacional y Estrategias de Intervención VI", anio: 3, semestre: 6, prereqs: ["TOEI5"] },
  { codigo: "PI1", nombre: "Práctica Integrada I", anio: 3, semestre: 6, prereqs: ["TOEI1", "TOEI2"] },
  { codigo: "GES1", nombre: "Gestión I", anio: 3, semestre: 6, prereqs: [] },
  { codigo: "GES2", nombre: "Gestión en Salud II", anio: 3, semestre: 6, prereqs: ["GES1"] },
  { codigo: "GATO", nombre: "Gestión Aplicada a Terapia Ocupacional", anio: 3, semestre: 6, prereqs: ["GES2"] },

  // Cuarto Año
  { codigo: "ICTO3", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional III", anio: 4, semestre: 7, prereqs: ["ICTO2"] },
  { codigo: "TOEI7", nombre: "Terapia Ocupacional y Estrategias de Intervención VII", anio: 4, semestre: 7, prereqs: ["TOEI6"] },
  { codigo: "PI2", nombre: "Práctica Integrada II: En Educación/Trabajo", anio: 4, semestre: 7, prereqs: ["PI1"] },
  { codigo: "OCR", nombre: "Ocupación y Redes", anio: 4, semestre: 7, prereqs: [] },
  { codigo: "OCC", nombre: "Ocupación y Cultura", anio: 4, semestre: 7, prereqs: [] },
  { codigo: "HPO", nombre: "Historias y Perfiles Ocupacionales", anio: 4, semestre: 7, prereqs: [] },

  { codigo: "ICTO4", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV", anio: 4, semestre: 8, prereqs: ["ICTO3"] },
  { codigo: "TOEI8", nombre: "Terapia Ocupacional y Estrategias de Intervención VIII",

