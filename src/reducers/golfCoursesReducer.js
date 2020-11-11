import { cgcImages } from "../images/chesterfieldGolfClub";
import { GET_GOLF_COURSES } from "../actions/constants";

const INITIAL_STATE = {
  golfCourses: [
    {
      id: 1,
      name: "Chesterfield Golf Club",
      images: cgcImages,
      scoreCard: [
        {
          hole: 1,
          par: 4,
          yardsYellow: 293,
          yardsWhite: 298,
          strokeIndex: 14
        },
        {
          hole: 2,
          par: 4,
          yardsYellow: 407,
          yardsWhite: 425,
          strokeIndex: 6
        },
        {
          hole: 3,
          par: 4,
          yardsYellow: 396,
          yardsWhite: 433,
          strokeIndex: 2
        },
        {
          hole: 4,
          par: 4,
          yardsYellow: 305,
          yardsWhite: 312,
          strokeIndex: 16
        },
        {
          hole: 5,
          par: 4,
          yardsYellow: 337,
          yardsWhite: 347,
          strokeIndex: 4
        },
        {
          hole: 6,
          par: 3,
          yardsYellow: 183,
          yardsWhite: 197,
          strokeIndex: 12
        },
        {
          hole: 7,
          par: 4,
          yardsYellow: 368,
          yardsWhite: 374,
          strokeIndex: 8
        },
        {
          hole: 8,
          par: 3,
          yardsYellow: 139,
          yardsWhite: 148,
          strokeIndex: 18
        },
        {
          hole: 9,
          par: 5,
          yardsYellow: 467,
          yardsWhite: 474,
          strokeIndex: 10
        },
        {
          hole: 10,
          par: 4,
          yardsYellow: 403,
          yardsWhite: 414,
          strokeIndex: 3
        },
        {
          hole: 11,
          par: 5,
          yardsYellow: 471,
          yardsWhite: 481,
          strokeIndex: 15
        },
        {
          hole: 12,
          par: 3,
          yardsYellow: 181,
          yardsWhite: 191,
          strokeIndex: 13
        },
        {
          hole: 13,
          par: 4,
          yardsYellow: 445,
          yardsWhite: 453,
          strokeIndex: 1
        },
        {
          hole: 14,
          par: 4,
          yardsYellow: 349,
          yardsWhite: 356,
          strokeIndex: 7
        },
        {
          hole: 15,
          par: 3,
          yardsYellow: 157,
          yardsWhite: 165,
          strokeIndex: 17
        },
        {
          hole: 16,
          par: 4,
          yardsYellow: 327,
          yardsWhite: 341,
          strokeIndex: 9
        },
        {
          hole: 17,
          par: 4,
          yardsYellow: 372,
          yardsWhite: 384,
          strokeIndex: 5
        },
        {
          hole: 18,
          par: 5,
          yardsYellow: 475,
          yardsWhite: 488,
          strokeIndex: 11
        }
      ]
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GOLF_COURSES:
      return { ...state };
    default:
      return { ...state };
  }
};
