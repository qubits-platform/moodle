(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[830], {
		24511: function(n, e, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/Assignment", function() {
				return t(71311)
			}])
		},
		36554: function(n, e, t) {
			"use strict";
			t.d(e, {
				Z: function() {
					return C
				}
			});
			var s = t(41799),
				a = t(69396),
				i = t(828),
				o = t(85893),
				r = t(67294),
				c = t(96391),
				l = t(77493),
				d = t(57645),
				m = t(99534),
				u = t(7297);
			t(73935);
			var x = t(18872);

			function p() {
				var n = (0, u.Z)(["\n          cursor: pointer;\n          color: ", ";\n        "]);
				return p = function() {
					return n
				}, n
			}

			function h() {
				var n = (0, u.Z)(["\n        font-size: 18px;\n        vertical-align: text-bottom;\n      "]);
				return h = function() {
					return n
				}, n
			}

			function f() {
				var n = (0, u.Z)(["\n        & > * {\n          display: inline-block;\n        }\n\n        & > * + * {\n          margin-left: 15px;\n        }\n      "]);
				return f = function() {
					return n
				}, n
			}

			function g() {
				var n = (0, u.Z)(["\n        position: relative;\n        padding: 1px 18px 17px;\n        margin: 0 -20px;\n        border-bottom: 2px solid #eee;\n        margin-bottom: 20px;\n      "]);
				return g = function() {
					return n
				}, n
			}
			var j = r.forwardRef(function(n, e) {
					var t = n.className,
						i = n.active,
						r = n.reversed,
						c = (0, m.Z)(n, ["className", "active", "reversed"]);
					return (0, o.jsx)("span", (0, a.Z)((0, s.Z)({}, c), {
						ref: e,
						className: (0, x.cx)(t, (0, x.iv)(p(), r ? i ? "white" : "#aaa" : i ? "black" : "#ccc"))
					}))
				}),
				b = r.forwardRef(function(n, e) {
					var t = n.className,
						i = (0, m.Z)(n, ["className"]);
					return (0, o.jsx)("span", (0, a.Z)((0, s.Z)({}, i), {
						ref: e,
						className: (0, x.cx)("material-icons", t, (0, x.iv)(h()))
					}))
				}),
				v = r.forwardRef(function(n, e) {
					var t = n.className,
						i = (0, m.Z)(n, ["className"]);
					return (0, o.jsx)("div", (0, a.Z)((0, s.Z)({}, i), {
						"data-test-id": "menu",
						ref: e,
						className: (0, x.cx)(t, (0, x.iv)(f()))
					}))
				}),
				Z = r.forwardRef(function(n, e) {
					var t = n.className,
						i = (0, m.Z)(n, ["className"]);
					return (0, o.jsx)(v, (0, a.Z)((0, s.Z)({}, i), {
						ref: e,
						className: (0, x.cx)(t, (0, x.iv)(g()))
					}))
				}),
				S = t(56989),
				_ = function(n, e) {
					y(n, e) ? l.Editor.removeMark(n, e) : l.Editor.addMark(n, e, !0)
				},
				y = function(n, e) {
					var t = l.Editor.marks(n);
					return !!t && !0 === t[e]
				},
				w = function(n) {
					var e = n.attributes,
						t = n.children,
						i = n.element,
						r = {
							textAlign: i.align
						};
					switch (i.type) {
						case "block-quote":
							return (0, o.jsx)("blockquote", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}));
						case "bulleted-list":
							return (0, o.jsx)("ul", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}));
						case "heading-one":
							return (0, o.jsx)("h1", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}));
						case "heading-two":
							return (0, o.jsx)("h2", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}));
						case "list-item":
							return (0, o.jsx)("li", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}));
						case "numbered-list":
							return (0, o.jsx)("ol", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}));
						default:
							return (0, o.jsx)("p", (0, a.Z)((0, s.Z)({
								style: r
							}, e), {
								children: t
							}))
					}
				},
				N = function(n) {
					var e = n.attributes,
						t = n.children,
						i = n.leaf;
					return i.bold && (t = (0, o.jsx)("strong", {
						children: t
					})), i.code && (t = (0, o.jsx)("code", {
						children: t
					})), i.italic && (t = (0, o.jsx)("em", {
						children: t
					})), i.underline && (t = (0, o.jsx)("u", {
						children: t
					})), (0, o.jsx)("span", (0, a.Z)((0, s.Z)({}, e), {
						children: t
					}))
				},
				k = function(n) {
					var e = n.format,
						t = n.icon,
						s = (0, c.ui)();
					return (0, o.jsx)(j, {
						active: y(s, e),
						onMouseDown: function(n) {
							n.preventDefault(), _(s, e)
						},
						children: (0, o.jsx)(b, {
							children: t
						})
					})
				},
				C = function(n) {
					var e = n.onlinetext,
						t = n.setOnlineText,
						a = n.editable,
						m = (0, r.useCallback)(function(n) {
							return (0, o.jsx)(w, (0, s.Z)({}, n))
						}, []),
						u = (0, r.useCallback)(function(n) {
							return (0, o.jsx)(N, (0, s.Z)({}, n))
						}, []),
						x = (0, r.useMemo)(function() {
							return (0, d.VC)((0, c.BU)((0, l.createEditor)()))
						}, []),
						p = (0, i.Z)((0, r.useState)((0, S.htmlToSlate)(e)), 2),
						h = p[0],
						f = p[1];
					return (0, o.jsxs)(c.mH, {
						editor: x,
						initialValue: h,
						onChange: function(n) {
							f(n), t((0, S.slateToHtml)(n))
						},
						children: [!a && (0, o.jsxs)(Z, {
							children: [(0, o.jsx)(k, {
								format: "bold",
								icon: "format_bold"
							}), (0, o.jsx)(k, {
								format: "italic",
								icon: "format_italic"
							}), (0, o.jsx)(k, {
								format: "underline",
								icon: "format_underlined"
							}), (0, o.jsx)(k, {
								format: "code",
								icon: "code"
							})]
						}), (0, o.jsx)(c.CX, {
							className: "slateditor",
							renderElement: m,
							renderLeaf: u,
							autoFocus: !0,
							readOnly: a
						})]
					})
				}
		},
		71311: function(n, e, t) {
			"use strict";
			t.r(e), t.d(e, {
				default: function() {
					return V
				}
			});
			var s = t(828),
				a = t(85893),
				i = t(67294),
				o = t(11163),
				r = t(69417),
				c = t(31536),
				l = t(25935),
				d = t(36554),
				m = function(n) {
					var e = n.responseData,
						t = (0, s.Z)((0, i.useState)(null), 2),
						o = t[0],
						m = t[1],
						u = (0, s.Z)((0, i.useState)(!0), 2),
						x = u[0],
						p = u[1],
						h = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.assignmentid
						}),
						f = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submission_status
						}),
						g = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.studentsubmitted_content
						}),
						j = "0" == f ? "<p></p>" : g,
						b = function() {
							Z()
						},
						v = function() {
							p(!1)
						},
						Z = function() {
							var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_save_studentsubmission"),
								e = [{
									index: 0,
									methodname: "mod_qbassign_save_studentsubmission",
									args: {
										qbassignmentid: parseInt(h),
										plugindata_text: o,
										plugindata_format: 1,
										plugindata_type: "onlinetext",
										explanation: ""
									}
								}];
							fetch(n, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify(e)
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								p(!1), setError(null)
							}).catch(function(n) {
								p(!1)
							})
						};
					return (0, a.jsxs)(a.Fragment, {
						children: [!0 == x && (0, a.jsx)("div", {
							children: null == e ? void 0 : e.map(function(n, e) {
								return (0, a.jsxs)("div", {
									className: "assignment-wrapper",
									children: ["onlinetex" == n.data.assignmentdetails.submissiontypes.type && (0, a.jsxs)("div", {
										children: [(0, a.jsx)("h2", {
											children: n.data.assignmentdetails.assignment_title
										}), (0, a.jsx)("p", {
											children: (0, l.ZP)(n.data.assignmentdetails.assignment_activitydesc)
										}), (0, a.jsx)(d.Z, {
											onlinetext: j.toString(),
											setOnlineText: m,
											editable: !1
										}), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsxs)(c.Z, {
											direction: "row",
											spacing: 2,
											children: [(0, a.jsx)(r.Z, {
												variant: "contained",
												style: {
													backgroundColor: "#116cbf",
													textTransform: "none",
													fontSize: "14px",
													borderRadius: "0.5rem"
												},
												onClick: b,
												children: "Save changes"
											}), (0, a.jsx)(r.Z, {
												variant: "contained",
												style: {
													backgroundColor: "#116cbf",
													textTransform: "none",
													fontSize: "14px",
													borderRadius: "0.5rem"
												},
												disabled: !1,
												onClick: v,
												children: "Cancel"
											})]
										})]
									}), (0, a.jsx)("br", {})]
								}, e)
							})
						}), !1 == x && (0, a.jsx)(V, {})]
					})
				},
				u = t(7906),
				x = t(295),
				p = t(53252),
				h = t(72882),
				f = t(53816),
				g = t(90629),
				j = t(67358),
				b = t(38895),
				v = t(22797),
				Z = t(15861),
				S = t(23508),
				_ = t(41733),
				y = t(37598),
				w = t(23795),
				N = t(86886),
				k = function(n) {
					var e = n.comments,
						t = n.comment_total,
						o = n.setIsRemoveSubmission,
						r = n.setShowAddComponent,
						d = n.AssignmentID,
						m = n.courseID,
						u = n.submission_ID,
						x = (0, s.Z)((0, i.useState)(!1), 2),
						p = x[0],
						h = x[1],
						f = (0, s.Z)((0, i.useState)(), 2),
						g = f[0],
						k = f[1],
						C = function(n) {
							var e = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_delete_comment");
							fetch(e, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify([{
									index: 0,
									methodname: "mod_qbassign_delete_comment",
									args: {
										commentid: n
									}
								}])
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								o(!0), r(null)
							}).catch(function(n) {})
						},
						I = function() {
							var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_save_comment"),
								e = [{
									index: 0,
									methodname: "mod_qbassign_save_comment",
									args: {
										submissionid: parseInt(u),
										content: g,
										courseid: parseInt(m),
										assignmentid: parseInt(d)
									}
								}];
							fetch(n, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify(e)
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								o(!0), r(null)
							}).catch(function(n) {})
						},
						D = function() {
							h(!p)
						};
					return (0, a.jsx)("div", {
						children: (0, a.jsxs)(j.Z, {
							className: "accordion",
							expanded: p,
							children: [(0, a.jsx)(b.Z, {
								expandIcon: (0, a.jsx)(S.Z, {}),
								"aria-controls": "panel1a-content",
								id: "panel1a-header",
								onClick: D,
								children: (0, a.jsxs)(Z.Z, {
									className: "comment-heading",
									children: ["Comments (", t, ")"]
								})
							}), (0, a.jsx)(v.Z, {
								children: e.map(function(n, e) {
									return (0, a.jsxs)("div", {
										children: [n.map(function(n, e) {
											return (0, a.jsxs)("div", {
												className: "comment-card",
												children: [(0, a.jsxs)(N.ZP, {
													container: !0,
													spacing: 2,
													style: {
														alignItems: "center",
														justifyContent: "flex-start",
														padding: "0 !important"
													},
													children: [(0, a.jsx)(N.ZP, {
														item: !0,
														xs: 1,
														className: "p-0 ",
														children: (0, a.jsx)("p", {
															className: "shortname-profile",
															children: n.shortname
														})
													}), (0, a.jsxs)(N.ZP, {
														item: !0,
														xs: 2,
														className: "p-0 ",
														children: [" ", (0, a.jsx)("p", {
															className: "fullname",
															children: n.fullname
														})]
													}), (0, a.jsx)(N.ZP, {
														item: !0,
														xs: 4,
														className: "p-0 ",
														children: (0, a.jsx)("p", {
															children: n.time
														})
													}), (0, a.jsx)(N.ZP, {
														item: !0,
														xs: 1,
														className: "p-0 ",
														children: n.delete && (0, a.jsx)(_.Z, {
															className: "delete-icon",
															onClick: function(e) {
																C(n.id)
															}
														})
													})]
												}), (0, a.jsx)("p", {
													style: {
														width: "500px"
													},
													children: (0, l.ZP)(n.content)
												})]
											}, e)
										}), (0, a.jsx)(y.u, {
											"aria-label": "empty textarea",
											placeholder: "Addcomment",
											minRows: 3,
											onChange: function(n) {
												k(n.target.value)
											}
										}), (0, a.jsxs)(c.Z, {
											direction: "row",
											spacing: 2,
											children: [(0, a.jsx)(w.Z, {
												component: "button",
												underline: "none",
												variant: "body2",
												onClick: I,
												children: "Save"
											}), (0, a.jsx)(w.Z, {
												component: "button",
												underline: "none",
												variant: "body2",
												onClick: D,
												children: "Cancel"
											})]
										})]
									}, e)
								})
							})]
						})
					})
				},
				C = function(n) {
					var e, t, o, d, j, b, v, Z = n.responseData,
						S = n.submissionStatus,
						_ = n.Text,
						y = n.unixTimestamp,
						w = n.feedbackdetails,
						N = n.comments,
						C = n.comment_total,
						I = (0, s.Z)((0, i.useState)(!1), 2),
						D = I[0],
						T = I[1],
						P = (0, s.Z)((0, i.useState)(!1), 2),
						R = P[0],
						q = P[1],
						O = (0, s.Z)((0, i.useState)(null), 2),
						F = O[0],
						E = O[1],
						A = (0, s.Z)((0, i.useState)(null), 2),
						z = A[0],
						G = A[1],
						J = (0, s.Z)((0, i.useState)(null), 2),
						L = J[0],
						U = J[1],
						W = (0, s.Z)((0, i.useState)(""), 2),
						H = (W[0], W[1]),
						Y = (0, s.Z)((0, i.useState)(), 2),
						B = Y[0],
						X = Y[1],
						K = (0, s.Z)((0, i.useState)(), 2),
						Q = K[0],
						$ = K[1],
						nn = (0, s.Z)((0, i.useState)(), 2),
						ne = nn[0],
						nt = nn[1],
						ns = (0, s.Z)((0, i.useState)(), 2),
						na = ns[0],
						ni = ns[1];

					function no(n, e) {
						return {
							name: n,
							calories: e
						}
					}
					var nr = [no("Submission Status", "1" == S.toString() ? "submitted" : "Not Submitted"), no("Grading Status", B || "pending..."), no("Last Modified", (t = (e = new Date(1e3 * y)).getFullYear(), o = String(e.getMonth() + 1).padStart(2, "0"), d = String(e.getDate()).padStart(2, "0"), j = String(e.getHours()).padStart(2, "0"), b = String(e.getMinutes()).padStart(2, "0"), v = String(e.getSeconds()).padStart(2, "0"), "".concat(t, "-").concat(o, "-").concat(d, " ").concat(j, ":").concat(b, ":").concat(v))), no("Online Submission", (0, l.ZP)(_.toString())), no("Comments", (0, a.jsx)(k, {
							comments: N,
							comment_total: C,
							setIsRemoveSubmission: q,
							setShowAddComponent: T,
							AssignmentID: F,
							courseID: z,
							submission_ID: L
						}))],
						nc = [no("Grade", B), no("Graded on", Q), no("Graded by", ne)];
					return (0, i.useEffect)(function() {
						E(null == Z ? void 0 : Z.map(function(n) {
							return n.data.assignmentdetails.assignmentid
						})), G(null == Z ? void 0 : Z.map(function(n) {
							return n.data.assignmentdetails.course_id
						})), U(null == Z ? void 0 : Z.map(function(n) {
							return n.data.assignmentdetails.submission_id
						})), w.map(function(n) {
							X(n.grade), $(n.grade_on), nt(n.grade_by), ni(n.feedback_status)
						})
					}, []), (0, a.jsxs)(a.Fragment, {
						children: [!1 == D && (0, a.jsxs)("div", {
							className: "assignment-wrapper",
							children: [null == Z ? void 0 : Z.map(function(n, e) {
								return (0, a.jsxs)("div", {
									children: [(0, a.jsx)("h3", {
										children: n.data.assignmentdetails.assignment_title
									}), (0, a.jsxs)("p", {
										className: "edittry",
										children: [" ", (0, l.ZP)(n.data.assignmentdetails.assignment_activitydesc)]
									})]
								}, e)
							}), (0, a.jsx)("div", {
								children: 1 != na && (0, a.jsxs)(c.Z, {
									direction: "row",
									spacing: 2,
									children: [(0, a.jsx)(r.Z, {
										variant: "contained",
										style: {
											backgroundColor: "#116cbf",
											textTransform: "none",
											fontSize: "14px",
											borderRadius: "0.5rem"
										},
										onClick: function() {
											T(!0)
										},
										children: "Edit Submission"
									}), (0, a.jsx)(r.Z, {
										variant: "contained",
										style: {
											backgroundColor: "#116cbf",
											textTransform: "none",
											fontSize: "14px",
											borderRadius: "0.5rem"
										},
										onClick: function() {
											var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_remove_submission"),
												e = [{
													index: 0,
													methodname: "mod_qbassign_remove_submission",
													args: {
														submissionid: parseInt(L),
														assignmentid: parseInt(F),
														courseid: parseInt(z),
														submissiontype: "text"
													}
												}];
											fetch(n, {
												method: "POST",
												headers: {
													"Content-Type": "application/json"
												},
												body: JSON.stringify(e)
											}).then(function(n) {
												return n.json()
											}).then(function(n) {
												q(!0), T(null)
											}).catch(function(n) {
												H("Error occured while removing data")
											})
										},
										children: "Remove Submission"
									})]
								})
							}), (0, a.jsx)(h.Z, {
								component: g.Z,
								className: "tablestart",
								children: (0, a.jsx)(u.Z, {
									sx: {
										minWidth: 650
									},
									"aria-label": "simple table",
									children: (0, a.jsx)(x.Z, {
										children: nr.map(function(n) {
											return (0, a.jsx)(a.Fragment, {
												children: "Comments" == n.name ? (0, a.jsx)(a.Fragment, {
													children: C > 0 ? (0, a.jsxs)(f.Z, {
														children: [(0, a.jsx)(p.Z, {
															component: "th",
															scope: "row",
															className: "table-align",
															children: n.name
														}), (0, a.jsx)(p.Z, {
															className: "tablecolor table-align",
															children: n.calories
														})]
													}) : ""
												}) : (0, a.jsxs)(f.Z, {
													children: [(0, a.jsx)(p.Z, {
														component: "th",
														scope: "row",
														className: "table-align",
														children: n.name
													}), (0, a.jsx)(p.Z, {
														className: "tablecolor table-align",
														children: n.calories
													})]
												})
											})
										})
									})
								})
							}), (0, a.jsx)("br", {}), 1 == na && (0, a.jsxs)("div", {
								children: [" ", (0, a.jsx)("h2", {
									children: "Feedback"
								}), (0, a.jsx)(h.Z, {
									component: g.Z,
									className: "tablestart",
									children: (0, a.jsx)(u.Z, {
										sx: {
											minWidth: 650
										},
										"aria-label": "simple table",
										children: (0, a.jsx)(x.Z, {
											children: nc.map(function(n) {
												return (0, a.jsxs)(f.Z, {
													children: [(0, a.jsx)(p.Z, {
														component: "th",
														scope: "row",
														className: "table-align",
														children: n.name
													}), (0, a.jsx)(p.Z, {
														className: "tablecolor table-align",
														children: n.calories
													})]
												}, n.name)
											})
										})
									})
								})]
							})]
						}), !0 == D && (0, a.jsx)(m, {
							responseData: Z
						}), R && (0, a.jsx)(V, {})]
					})
				},
				I = function(n) {
					var e = n.responseData,
						t = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submission_status
						}),
						s = null == e ? void 0 : e.map(function(n, e) {
							return n.data.assignmentdetails.studentsubmitted_content
						}),
						i = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.last_submitted_date
						}),
						o = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.feedback
						}),
						r = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.comments
						}),
						c = null == e ? void 0 : e.map(function(n) {
							return parseInt(n.data.assignmentdetails.comment_total)
						});
					return (0, a.jsxs)(a.Fragment, {
						children: [0 == t && (0, a.jsx)(m, {
							responseData: e
						}), 1 == t && (0, a.jsx)(C, {
							responseData: e,
							submissionStatus: t,
							unixTimestamp: i,
							Text: s,
							feedbackdetails: o,
							comments: r,
							comment_total: c
						})]
					})
				},
				D = t(47568),
				T = t(70655),
				P = t(87357),
				R = t(98456),
				q = function() {
					return (0, a.jsx)(P.Z, {
						sx: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							mt: 2
						},
						children: (0, a.jsx)(R.Z, {})
					})
				};

			function O(n) {
				var e, t = n.responseData,
					o = (0, s.Z)((0, i.useState)(!0), 2),
					d = o[0],
					m = o[1],
					u = (0, s.Z)((0, i.useState)(), 2),
					x = u[0],
					p = u[1],
					h = (0, s.Z)((0, i.useState)(!1), 2),
					f = h[0],
					g = h[1],
					Z = (0, s.Z)((0, i.useState)(), 2),
					_ = Z[0],
					y = Z[1],
					w = null == t ? void 0 : t.map(function(n) {
						return n.data.assignmentdetails.assignmentid
					}),
					N = null == t ? void 0 : t.map(function(n) {
						return n.data.assignmentdetails.course_id
					}),
					k = function() {
						R()
					};
				(0, i.useEffect)(function() {
					y((null == t ? void 0 : t.map(function(n) {
						return n.data.assignmentdetails.submissiontypes.additional_comments
					})).toString())
				}, []);
				var C = function() {
						m(!1)
					},
					I = function(n) {
						var e = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_save_studentfilesubmission"),
							t = [{
								index: 0,
								methodname: "mod_qbassign_save_studentfilesubmission",
								args: {
									assignmentid: parseInt(w),
									fileareainfo: n,
									filename: x.name,
									courseid: parseInt(N),
									explanation: _
								}
							}];
						fetch(e, {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(t)
						}).then(function(n) {
							return n.json()
						}).then(function(n) {
							g(!0), m(!1), setError(null)
						}).catch(function(n) {
							m(!1)
						})
					},
					P = function(n) {
						p(n.target.files[0])
					},
					R = (e = (0, D.Z)(function() {
						return (0, T.__generator)(this, function(n) {
							switch (n.label) {
								case 0:
									if (!x) return [3, 2];
									return g(!0), [4, new Promise(function(n, e) {
										var t = new FileReader;
										t.onload = function(e) {
											n(e.target.result.split(",")[1])
										}, t.onerror = function(n) {
											e(n)
										}, t.readAsDataURL(x)
									})];
								case 1:
									I(n.sent()), n.label = 2;
								case 2:
									return [2]
							}
						})
					}), function() {
						return e.apply(this, arguments)
					});
				return (0, a.jsxs)(a.Fragment, {
					children: [!0 == d && (0, a.jsx)("div", {
						children: null == t ? void 0 : t.map(function(n, e) {
							return (0, a.jsxs)("div", {
								className: "assignment-wrapper",
								children: [ (0, a.jsxs)("div", {
									children: [(0, a.jsx)("h2", {
										children: n.data.assignmentdetails.assignment_title
									}), (0, a.jsx)("p", {
										children: (0, l.ZP)(n.data.assignmentdetails.assignment_activitydesc)
									}), (0, a.jsxs)("div", {
										children: [(0, a.jsx)("h2", {
											children: "Choose a file to upload"
										}), (0, a.jsx)("input", {
											type: "file",
											onChange: P
										})]
									}), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsxs)(j.Z, {
                                        style: {
                                            borderBottom: "1px solid #dee2e6"
                                        },
                                        children: [(0, a.jsx)(b.Z, {
                                            expandIcon: (0, a.jsx)(S.Z, {
                                                className: "expand-icon"
                                            }),
                                            "aria-controls": "panel1a-content",
                                            id: "panel1a-header",
                                            children: (0, a.jsx)("h1", {
                                                children: "Add Your Comments"
                                            })
                                        }), (0, a.jsx)(v.Z, {
                                            children: (0, a.jsx)("div", {
                                                children: (0, a.jsx)("textarea", {
                                                    style: {
                                                        width: "90%",
                                                        borderColor: "#8f959e",
                                                        borderRadius: "8px",
                                                        padding: "10px"
                                                    },
                                                    onChange: function(n) {
                                                        return y(n.target.value)
                                                    },
                                                    value: _
                                                })
                                            })
                                        })]
                                    }), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), !f && (0, a.jsxs)(c.Z, {
										direction: "row",
										spacing: 2,
										children: [(0, a.jsx)(r.Z, {
											variant: "contained",
											style: {
												backgroundColor: "#116cbf",
												textTransform: "none",
												fontSize: "14px",
												borderRadius: "0.5rem"
											},
											onClick: k,
											children: "Upload File"
										}), (0, a.jsx)(r.Z, {
											variant: "contained",
											style: {
												backgroundColor: "#116cbf",
												textTransform: "none",
												fontSize: "14px",
												borderRadius: "0.5rem"
											},
											disabled: !1,
											onClick: C,
											children: "Cancel"
										})]
									}), f && (0, a.jsx)(q, {})]
								}), (0, a.jsx)("br", {})]
							}, e)
						})
					}), !1 == d && (0, a.jsx)(V, {})]
				})
			}
			var F = function(n) {
					var e = n.comments,
						t = n.comment_total,
						o = n.setIsRemoveSubmission,
						r = n.setShowAddComponent,
						d = n.AssignmentID,
						m = n.courseID,
						u = n.submission_ID,
						x = (0, s.Z)((0, i.useState)(!1), 2),
						p = x[0],
						h = x[1],
						f = (0, s.Z)((0, i.useState)(), 2),
						g = f[0],
						k = f[1],
						C = function(n) {
							var e = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_delete_comment");
							fetch(e, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify([{
									index: 0,
									methodname: "mod_qbassign_delete_comment",
									args: {
										commentid: n
									}
								}])
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								o(!0), r(null)
							}).catch(function(n) {})
						},
						I = function() {
							var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_save_comment"),
								e = [{
									index: 0,
									methodname: "mod_qbassign_save_comment",
									args: {
										submissionid: parseInt(u),
										content: g,
										courseid: parseInt(m),
										assignmentid: parseInt(d)
									}
								}];
							fetch(n, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify(e)
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								o(!0), r(null)
							}).catch(function(n) {})
						},
						D = function() {
							h(!p)
						};
					return (0, a.jsx)("div", {
						children: (0, a.jsxs)(j.Z, {
							className: "accordion",
							expanded: p,
							children: [(0, a.jsx)(b.Z, {
								expandIcon: (0, a.jsx)(S.Z, {}),
								"aria-controls": "panel1a-content",
								id: "panel1a-header",
								onClick: D,
								children: (0, a.jsxs)(Z.Z, {
									className: "comment-heading",
									children: ["Comments (", t, ")"]
								})
							}), (0, a.jsx)(v.Z, {
								children: e.map(function(n, e) {
									return (0, a.jsxs)("div", {
										children: [n.map(function(n, e) {
											return (0, a.jsxs)("div", {
												className: "comment-card",
												children: [(0, a.jsxs)(N.ZP, {
													container: !0,
													spacing: 2,
													style: {
														alignItems: "center",
														justifyContent: "flex-start",
														padding: "0 !important"
													},
													children: [(0, a.jsx)(N.ZP, {
														item: !0,
														xs: 1,
														className: "p-0 ",
														children: (0, a.jsx)("p", {
															className: "shortname-profile",
															children: n.shortname
														})
													}), (0, a.jsxs)(N.ZP, {
														item: !0,
														xs: 2,
														className: "p-0 ",
														children: [" ", (0, a.jsx)("p", {
															className: "fullname",
															children: n.fullname
														})]
													}), (0, a.jsx)(N.ZP, {
														item: !0,
														xs: 4,
														className: "p-0 ",
														children: (0, a.jsx)("p", {
															children: n.time
														})
													}), (0, a.jsx)(N.ZP, {
														item: !0,
														xs: 1,
														className: "p-0 ",
														children: n.delete && (0, a.jsx)(_.Z, {
															className: "delete-icon",
															onClick: function(e) {
																C(n.id)
															}
														})
													})]
												}), (0, a.jsx)("p", {
													style: {
														width: "500px"
													},
													children: (0, l.ZP)(n.content)
												})]
											}, e)
										}), (0, a.jsx)(y.u, {
											"aria-label": "empty textarea",
											placeholder: "Addcomment",
											minRows: 3,
											onChange: function(n) {
												k(n.target.value)
											}
										}), (0, a.jsxs)(c.Z, {
											direction: "row",
											spacing: 2,
											children: [(0, a.jsx)(w.Z, {
												component: "button",
												underline: "none",
												variant: "body2",
												onClick: I,
												children: "Save"
											}), (0, a.jsx)(w.Z, {
												component: "button",
												underline: "none",
												variant: "body2",
												onClick: D,
												children: "Cancel"
											})]
										})]
									}, e)
								})
							})]
						})
					})
				},
				E = function(n) {
					var e, t, o, d, m, j, b, v = n.responseData,
						Z = n.submissionStatus,
						S = (n.Text, n.unixTimestamp),
						_ = n.DownloadURL,
						y = n.DownloadFilename,
						N = (n.AdditionalComments, n.feedbackdetails),
						k = n.comments,
						C = n.comment_total,
						I = (0, s.Z)((0, i.useState)(!1), 2),
						D = I[0],
						T = I[1],
						P = (0, s.Z)((0, i.useState)(!1), 2),
						R = P[0],
						q = P[1],
						E = (0, s.Z)((0, i.useState)(null), 2),
						A = E[0],
						z = E[1],
						G = (0, s.Z)((0, i.useState)(null), 2),
						J = G[0],
						L = G[1],
						U = (0, s.Z)((0, i.useState)(null), 2),
						W = U[0],
						H = U[1],
						Y = (0, s.Z)((0, i.useState)(""), 2),
						B = (Y[0], Y[1]),
						X = (0, s.Z)((0, i.useState)(), 2),
						K = X[0],
						Q = X[1],
						$ = (0, s.Z)((0, i.useState)(), 2),
						nn = $[0],
						ne = $[1],
						nt = (0, s.Z)((0, i.useState)(), 2),
						ns = nt[0],
						na = nt[1],
						ni = (0, s.Z)((0, i.useState)(), 2),
						no = ni[0],
						nr = ni[1];

					function nc(n, e, t, s, a) {
						return {
							name: n,
							calories: e,
							fat: t,
							carbs: s,
							protein: a
						}
					}
					var nl = [nc("Submission Status", "1" == Z.toString() ? "submitted" : "Not Submitted"), nc("Grading Status", K || "pending..."), nc("Last Modified", (t = (e = new Date(1e3 * S)).getFullYear(), o = String(e.getMonth() + 1).padStart(2, "0"), d = String(e.getDate()).padStart(2, "0"), m = String(e.getHours()).padStart(2, "0"), j = String(e.getMinutes()).padStart(2, "0"), b = String(e.getSeconds()).padStart(2, "0"), "".concat(t, "-").concat(o, "-").concat(d, " ").concat(m, ":").concat(j, ":").concat(b))), nc("Filename", y), nc("DownloadURL", (0, a.jsx)(w.Z, {
							href: _,
							variant: "body2",
							className: "comment-heading",
							children: "Download"
						})), nc("Comments", (0, a.jsx)(F, {
							comments: k,
							comment_total: C,
							setIsRemoveSubmission: q,
							setShowAddComponent: T,
							AssignmentID: A,
							courseID: J,
							submission_ID: W
						}))],
						nd = [nc("Grade", K), nc("Graded on", nn), nc("Graded by", ns)];
					return (0, i.useEffect)(function() {
						z(null == v ? void 0 : v.map(function(n) {
							return n.data.assignmentdetails.assignmentid
						})), L(null == v ? void 0 : v.map(function(n) {
							return n.data.assignmentdetails.course_id
						})), H(null == v ? void 0 : v.map(function(n) {
							return n.data.assignmentdetails.submission_id
						})), N.map(function(n) {
							Q(n.grade), ne(n.grade_on), na(n.grade_by), nr(n.feedback_status)
						})
					}, []), (0, a.jsxs)(a.Fragment, {
						children: [!1 == D && (0, a.jsxs)("div", {
							className: "assignment-wrapper",
							children: [null == v ? void 0 : v.map(function(n, e) {
								return (0, a.jsxs)("div", {
									children: [(0, a.jsx)("h3", {
										children: n.data.assignmentdetails.assignment_title
									}), (0, a.jsxs)("p", {
										className: "edittry",
										children: [" ", (0, l.ZP)(n.data.assignmentdetails.assignment_activitydesc)]
									})]
								}, e)
							}), (0, a.jsx)("div", {
								children: 1 != no && (0, a.jsxs)(c.Z, {
									direction: "row",
									spacing: 2,
									children: [(0, a.jsx)(r.Z, {
										variant: "contained",
										style: {
											backgroundColor: "#116cbf",
											textTransform: "none",
											fontSize: "14px",
											borderRadius: "0.5rem"
										},
										onClick: function() {
											T(!0)
										},
										children: "Edit Submission"
									}), (0, a.jsx)(r.Z, {
										variant: "contained",
										style: {
											backgroundColor: "#116cbf",
											textTransform: "none",
											fontSize: "14px",
											borderRadius: "0.5rem"
										},
										disabled: !1,
										onClick: function() {
											var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_remove_submission"),
												e = [{
													index: 0,
													methodname: "mod_qbassign_remove_submission",
													args: {
														submissionid: parseInt(W),
														assignmentid: parseInt(A),
														courseid: parseInt(J),
														submissiontype: "file"
													}
												}];
											fetch(n, {
												method: "POST",
												headers: {
													"Content-Type": "application/json"
												},
												body: JSON.stringify(e)
											}).then(function(n) {
												return n.json()
											}).then(function(n) {
												q(!0), T(null)
											}).catch(function(n) {
												B("Error occured while removing data")
											})
										},
										children: "Remove Submission"
									})]
								})
							}), (0, a.jsx)(h.Z, {
								component: g.Z,
								className: "tablestart",
								children: (0, a.jsx)(u.Z, {
									sx: {
										minWidth: 650
									},
									"aria-label": "simple table",
									children: (0, a.jsx)(x.Z, {
										children: nl.map(function(n) {
											return (0, a.jsx)(a.Fragment, {
												children: "Comments" == n.name ? (0, a.jsx)(a.Fragment, {
													children: C > 0 ? (0, a.jsxs)(f.Z, {
														children: [(0, a.jsx)(p.Z, {
															component: "th",
															scope: "row",
															className: "table-align",
															children: n.name
														}), (0, a.jsx)(p.Z, {
															className: "tablecolor table-align",
															children: n.calories
														})]
													}) : ""
												}) : (0, a.jsxs)(f.Z, {
													children: [(0, a.jsx)(p.Z, {
														component: "th",
														scope: "row",
														className: "table-align",
														children: n.name
													}), (0, a.jsx)(p.Z, {
														className: "tablecolor table-align",
														children: n.calories
													})]
												})
											})
										})
									})
								})
							}), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), 1 == no && (0, a.jsxs)("div", {
								children: [" ", (0, a.jsx)("h2", {
									children: "Feedback"
								}), (0, a.jsx)(h.Z, {
									component: g.Z,
									className: "tablestart",
									children: (0, a.jsx)(u.Z, {
										sx: {
											minWidth: 650
										},
										"aria-label": "simple table",
										children: (0, a.jsx)(x.Z, {
											children: nd.map(function(n) {
												return (0, a.jsxs)(f.Z, {
													children: [(0, a.jsx)(p.Z, {
														component: "th",
														scope: "row",
														className: "table-align",
														children: n.name
													}), (0, a.jsx)(p.Z, {
														className: "tablecolor table-align",
														children: n.calories
													})]
												}, n.name)
											})
										})
									})
								})]
							})]
						}), !0 == D && (0, a.jsx)(O, {
							responseData: v
						}), R && (0, a.jsx)(V, {})]
					})
				},
				A = function(n) {
					var e = n.responseData,
						t = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submission_status
						}),
						s = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.studentsubmitted_content
						}),
						i = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.last_submitted_date
						}),
						o = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.studentsubmitted_fileurl
						}),
						r = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.studentsubmitted_filename
						}),
						c = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.feedback
						}),
						l = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.comments
						}),
						d = null == e ? void 0 : e.map(function(n) {
							return parseInt(n.data.assignmentdetails.comment_total)
						});
					return (0, a.jsxs)(a.Fragment, {
						children: [0 == t && (0, a.jsx)(O, {
							responseData: e
						}), 1 == t && (0, a.jsx)(E, {
							responseData: e,
							submissionStatus: t,
							unixTimestamp: i,
							Text: s,
							DownloadURL: o,
							DownloadFilename: r,
							feedbackdetails: c,
							comments: l,
							comment_total: d
						})]
					})
				},
				z = t(5152),
				G = t.n(z),
				J = t(88078),
				L = t(34699),
				U = G()(function() {
					return Promise.all([t.e(281), t.e(981), t.e(132), t.e(583), t.e(268), t.e(489), t.e(581)]).then(t.bind(t, 83489))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [83489]
						}
					},
					ssr: !1,
					loading: function() {
						return (0, a.jsxs)(P.Z, {
							children: [(0, a.jsx)(J.Z, {
								animation: "wave"
							}), (0, a.jsx)(J.Z, {
								animation: "wave"
							}), (0, a.jsx)(J.Z, {
								animation: "wave"
							}), (0, a.jsx)(J.Z, {
								animation: "wave"
							})]
						})
					}
				}),
				W = function(n) {
					var e = n.assignmentlanguage,
						t = n.programcontent,
						o = n.setprogramcontent,
						r = (0, s.Z)((0, i.useState)(!1), 2),
						c = r[0],
						l = r[1],
						d = (0, s.Z)((0, i.useState)(!1), 2),
						m = d[0],
						u = d[1],
						x = (0, s.Z)((0, i.useState)(!0), 2),
						p = x[0],
						h = x[1],
						f = (0, s.Z)((0, i.useState)(!1), 2),
						g = f[0],
						j = f[1];
					(0, i.useEffect)(function() {
						"python" == e && j(null != t && !!t.match(/input/gi))
					}, [t]);
					var b = e + "-" + (0, L.D)(),
						v = (0, s.Z)((0, i.useState)(b), 1)[0];
					return (0, a.jsx)("div", {
						id: "content",
						className: "content",
						children: (0, a.jsx)("main", {
							children: (0, a.jsx)("div", {
								className: "standalone-container",
								children: (0, a.jsx)(U, {
									dataChage: function(n) {
										o(n), "python" == e ? l(!0) : l(!1)
									},
									value: t,
									language: e,
									visualization: c,
									gutter: !0,
									className: "standalone-editor",
									pytutorReset: m,
									setpytutorReset: u,
									consoleReset: p,
									setConsoleReset: h,
									theme: !0,
									uniqID: v,
									input: g
								})
							})
						})
					})
				},
				H = function(n) {
					var e = n.responseData,
						t = (0, s.Z)((0, i.useState)(!0), 2),
						o = t[0],
						d = t[1],
						m = (0, s.Z)((0, i.useState)(), 2),
						u = m[0],
						x = m[1],
						p = (0, s.Z)((0, i.useState)(), 2),
						h = p[0],
						f = p[1],
						g = null == e ? void 0 : e.map(function(n, e) {
							return n.data.assignmentdetails.assignmentid
						}),
						Z = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submissiontypes.language
						});
					(0, i.useEffect)(function() {
						x((null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.studentsubmitted_content
						})).toString()), f((null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submissiontypes.additional_comments
						})).toString())
					}, []);
					var _ = function() {
							w()
						},
						y = function() {
							d(!1)
						},
						w = function() {
							var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_save_studentsubmission"),
								e = [{
									index: 0,
									methodname: "mod_qbassign_save_studentsubmission",
									args: {
										qbassignmentid: parseInt(g),
										plugindata_text: u,
										plugindata_format: 1,
										plugindata_type: "codeblock",
										explanation: h
									}
								}];
							fetch(n, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify(e)
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								d(!1), k(null)
							}).catch(function(n) {
								d(!1)
							})
						},
						N = (0, s.Z)((0, i.useState)(null), 2),
						k = (N[0], N[1]);
					return (0, a.jsxs)(a.Fragment, {
						children: [!0 == o && (0, a.jsx)("div", {
							children: null == e ? void 0 : e.map(function(n, e) {
								return (0, a.jsxs)("div", {
									className: "assignment-wrapper",
									children: [ (0, a.jsxs)("div", {
										children: [(0, a.jsx)("h2", {
											children: n.data.assignmentdetails.assignment_title
										}), (0, a.jsx)("p", {
											children: (0, l.ZP)(n.data.assignmentdetails.assignment_activitydesc)
										}), (0, a.jsx)(W, {
											assignmentlanguage: Z.toString(),
											programcontent: u,
											setprogramcontent: x
										}), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}),(0, a.jsxs)(j.Z, {
											style: {
												borderBottom: "1px solid #dee2e6"
											},
											children: [(0, a.jsx)(b.Z, {
												expandIcon: (0, a.jsx)(S.Z, {
													className: "expand-icon"
												}),
												"aria-controls": "panel1a-content",
												id: "panel1a-header",
												children: (0, a.jsx)("h1", {
													children: "Add Your Comments"
												})
											}), (0, a.jsx)(v.Z, {
												children: (0, a.jsx)("div", {
													children: (0, a.jsx)("textarea", {
														style: {
															width: "90%",
															borderColor: "#8f959e",
															borderRadius: "8px",
															padding: "10px"
														},
														onChange: function(n) {
															return f(n.target.value)
														},
														value: h
													})
												})
											})]
										}), (0, a.jsx)("br", {}),(0, a.jsx)("br", {}), (0, a.jsx)("br", {}), (0, a.jsxs)(c.Z, {
											direction: "row",
											spacing: 2,
											children: [(0, a.jsx)(r.Z, {
												variant: "contained",
												style: {
													backgroundColor: "#116cbf",
													textTransform: "none",
													fontSize: "14px",
													borderRadius: "0.5rem"
												},
												onClick: _,
												children: "Save changes"
											}), (0, a.jsx)(r.Z, {
												variant: "contained",
												style: {
													backgroundColor: "#116cbf",
													textTransform: "none",
													fontSize: "14px",
													borderRadius: "0.5rem"
												},
												disabled: !1,
												onClick: y,
												children: "Cancel"
											})]
										})]
									}), (0, a.jsx)("br", {})]
								}, e)
							})
						}), !1 == o && (0, a.jsx)(V, {})]
					})
				},
				Y = function(n) {
					var e = n.comments,
						t = n.comment_total,
						o = n.setIsRemoveSubmission,
						r = n.setShowAddComponent,
						d = n.AssignmentID,
						m = n.courseID,
						u = n.submission_ID,
						x = (0, s.Z)((0, i.useState)(!1), 2),
						p = x[0],
						h = x[1],
						f = (0, s.Z)((0, i.useState)(), 2),
						g = f[0],
						k = f[1],
						C = function(n) {
							var e = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_delete_comment");
							fetch(e, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify([{
									index: 0,
									methodname: "mod_qbassign_delete_comment",
									args: {
										commentid: n
									}
								}])
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								o(!0), r(null)
							}).catch(function(n) {})
						},
						I = function() {
							var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_save_comment"),
								e = [{
									index: 0,
									methodname: "mod_qbassign_save_comment",
									args: {
										submissionid: parseInt(u),
										content: g,
										courseid: parseInt(m),
										assignmentid: parseInt(d)
									}
								}];
							fetch(n, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify(e)
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								o(!0), r(null)
							}).catch(function(n) {})
						},
						D = function() {
							h(!p)
						};
					return (0, a.jsx)("div", {
						children: (0, a.jsxs)(j.Z, {
							className: "accordion",
							expanded: p,
							children: [(0, a.jsx)(b.Z, {
								expandIcon: (0, a.jsx)(S.Z, {}),
								"aria-controls": "panel1a-content",
								id: "panel1a-header",
								onClick: D,
								children: (0, a.jsxs)(Z.Z, {
									className: "comment-heading",
									children: ["Comments (", t, ")"]
								})
							}), (0, a.jsx)(v.Z, {
								children: e.map(function(n, e) {
									return (0, a.jsxs)("div", {
										children: [n.map(function(n, e) {
											return (0, a.jsxs)("div", {
												className: "comment-card",
												children: [(0, a.jsxs)(N.ZP, {
													container: !0,
													spacing: 2,
													style: {
														alignItems: "center",
														justifyContent: "flex-start",
														padding: "0 !important"
													},
													children: [(0, a.jsx)(N.ZP, {
														item: !0,
														xs: 1,
														className: "p-0 ",
														children: (0, a.jsx)("p", {
															className: "shortname-profile",
															children: n.shortname
														})
													}), (0, a.jsxs)(N.ZP, {
														item: !0,
														xs: 2,
														className: "p-0 ",
														children: [" ", (0, a.jsx)("p", {
															className: "fullname",
															children: n.fullname
														})]
													}), (0, a.jsx)(N.ZP, {
														item: !0,
														xs: 4,
														className: "p-0 ",
														children: (0, a.jsx)("p", {
															children: n.time
														})
													}), (0, a.jsx)(N.ZP, {
														item: !0,
														xs: 1,
														className: "p-0 ",
														children: n.delete && (0, a.jsx)(_.Z, {
															className: "delete-icon",
															onClick: function(e) {
																C(n.id)
															}
														})
													})]
												}), (0, a.jsx)("p", {
													style: {
														width: "500px"
													},
													children: (0, l.ZP)(n.content)
												})]
											}, e)
										}), (0, a.jsx)(y.u, {
											"aria-label": "empty textarea",
											placeholder: "Addcomment",
											minRows: 3,
											onChange: function(n) {
												k(n.target.value)
											}
										}), (0, a.jsxs)(c.Z, {
											direction: "row",
											spacing: 2,
											children: [(0, a.jsx)(w.Z, {
												component: "button",
												underline: "none",
												variant: "body2",
												onClick: I,
												children: "Save"
											}), (0, a.jsx)(w.Z, {
												component: "button",
												underline: "none",
												variant: "body2",
												onClick: D,
												children: "Cancel"
											})]
										})]
									}, e)
								})
							})]
						})
					})
				},
				B = function(n) {
					var e, t, o, d, m, j, b, v = n.responseData,
						Z = n.submissionStatus,
						S = n.Text,
						_ = n.unixTimestamp,
						y = n.feedbackdetails,
						w = n.comments,
						N = n.comment_total,
						k = (0, s.Z)((0, i.useState)(!1), 2),
						C = k[0],
						I = k[1],
						D = (0, s.Z)((0, i.useState)(!1), 2),
						T = D[0],
						P = D[1],
						R = (0, s.Z)((0, i.useState)(null), 2),
						q = R[0],
						O = R[1],
						F = (0, s.Z)((0, i.useState)(null), 2),
						E = F[0],
						A = F[1],
						z = (0, s.Z)((0, i.useState)(null), 2),
						G = z[0],
						J = z[1],
						L = (0, s.Z)((0, i.useState)(""), 2),
						U = (L[0], L[1]),
						W = (0, s.Z)((0, i.useState)(), 2),
						B = W[0],
						X = W[1],
						K = (0, s.Z)((0, i.useState)(), 2),
						Q = K[0],
						$ = K[1],
						nn = (0, s.Z)((0, i.useState)(), 2),
						ne = nn[0],
						nt = nn[1],
						ns = (0, s.Z)((0, i.useState)(), 2),
						na = ns[0],
						ni = ns[1];

					function no(n, e, t, s, a) {
						return {
							name: n,
							calories: e,
							fat: t,
							carbs: s,
							protein: a
						}
					}
					var nr = [no("Submission Status", "1" == Z.toString() ? "submitted" : "Not Submitted"), no("Grading Status", B || "pending..."), no("Last Modified", (t = (e = new Date(1e3 * _)).getFullYear(), o = String(e.getMonth() + 1).padStart(2, "0"), d = String(e.getDate()).padStart(2, "0"), m = String(e.getHours()).padStart(2, "0"), j = String(e.getMinutes()).padStart(2, "0"), b = String(e.getSeconds()).padStart(2, "0"), "".concat(t, "-").concat(o, "-").concat(d, " ").concat(m, ":").concat(j, ":").concat(b))), no("Online Submission", S), no("Comments", (0, a.jsx)(Y, {
						comments: w,
						comment_total: N,
						setIsRemoveSubmission: P,
						setShowAddComponent: I,
						AssignmentID: q,
						courseID: E,
						submission_ID: G
					}))];
					(0, i.useEffect)(function() {
						O(null == v ? void 0 : v.map(function(n) {
							return n.data.assignmentdetails.assignmentid
						})), A(null == v ? void 0 : v.map(function(n) {
							return n.data.assignmentdetails.course_id
						})), J(null == v ? void 0 : v.map(function(n) {
							return n.data.assignmentdetails.submission_id
						})), y.map(function(n) {
							X(n.grade), $(n.grade_on), nt(n.grade_by), ni(n.feedback_status)
						})
					}, []);
					var nc = [no("Grade", B), no("Graded on", Q), no("Graded by", ne)];
					return (0, a.jsxs)(a.Fragment, {
						children: [!1 == C && (0, a.jsxs)("div", {
							className: "assignment-wrapper",
							children: [null == v ? void 0 : v.map(function(n, e) {
								return (0, a.jsxs)("div", {
									children: [(0, a.jsx)("h3", {
										children: n.data.assignmentdetails.assignment_title
									}), (0, a.jsxs)("p", {
										className: "edittry",
										children: [" ", (0, l.ZP)(n.data.assignmentdetails.assignment_activitydesc)]
									})]
								}, e)
							}), (0, a.jsx)("div", {
								children: 1 != na && (0, a.jsxs)(c.Z, {
									direction: "row",
									spacing: 2,
									children: [(0, a.jsx)(r.Z, {
										variant: "contained",
										style: {
											backgroundColor: "#116cbf",
											textTransform: "none",
											fontSize: "14px",
											borderRadius: "0.5rem"
										},
										onClick: function() {
											I(!0)
										},
										children: "Edit Submission"
									}), (0, a.jsx)(r.Z, {
										variant: "contained",
										style: {
											backgroundColor: "#116cbf",
											textTransform: "none",
											fontSize: "14px",
											borderRadius: "0.5rem"
										},
										disabled: !1,
										onClick: function() {
											var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_remove_submission"),
												e = [{
													index: 0,
													methodname: "mod_qbassign_remove_submission",
													args: {
														submissionid: parseInt(G),
														assignmentid: parseInt(q),
														courseid: parseInt(E),
														submissiontype: "codeblock"
													}
												}];
											fetch(n, {
												method: "POST",
												headers: {
													"Content-Type": "application/json"
												},
												body: JSON.stringify(e)
											}).then(function(n) {
												return n.json()
											}).then(function(n) {
												P(!0), I(null)
											}).catch(function(n) {
												U("Error occured while removing data")
											})
										},
										children: "Remove Submission"
									})]
								})
							}), (0, a.jsx)(h.Z, {
								component: g.Z,
								className: "tablestart",
								children: (0, a.jsx)(u.Z, {
									sx: {
										minWidth: 650
									},
									"aria-label": "simple table",
									children: (0, a.jsx)(x.Z, {
										children: nr.map(function(n) {
											return (0, a.jsx)(a.Fragment, {
												children: "Comments" == n.name ? (0, a.jsx)(a.Fragment, {
													children: N > 0 ? (0, a.jsxs)(f.Z, {
														children: [(0, a.jsx)(p.Z, {
															component: "th",
															scope: "row",
															className: "table-align",
															children: n.name
														}), (0, a.jsx)(p.Z, {
															className: "tablecolor table-align",
															children: n.calories
														})]
													}) : ""
												}) : (0, a.jsxs)(f.Z, {
													children: [(0, a.jsx)(p.Z, {
														component: "th",
														scope: "row",
														className: "table-align",
														children: n.name
													}), (0, a.jsx)(p.Z, {
														className: "tablecolor table-align",
														children: n.calories
													})]
												})
											})
										})
									})
								})
							}), (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), 1 == na && (0, a.jsxs)("div", {
								children: [" ", (0, a.jsx)("h2", {
									children: "Feedback"
								}), (0, a.jsx)(h.Z, {
									component: g.Z,
									className: "tablestart",
									children: (0, a.jsx)(u.Z, {
										sx: {
											minWidth: 650
										},
										"aria-label": "simple table",
										children: (0, a.jsx)(x.Z, {
											children: nc.map(function(n) {
												return (0, a.jsxs)(f.Z, {
													children: [(0, a.jsx)(p.Z, {
														component: "th",
														scope: "row",
														className: "table-align",
														children: n.name
													}), (0, a.jsx)(p.Z, {
														className: "tablecolor table-align",
														children: n.calories
													})]
												}, n.name)
											})
										})
									})
								})]
							})]
						}), !0 == C && (0, a.jsx)(H, {
							responseData: v
						}), T && (0, a.jsx)(V, {})]
					})
				},
				X = function(n) {
					var e = n.responseData,
						t = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submission_status
						}),
						s = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.studentsubmitted_content
						}),
						i = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.last_submitted_date
						}),
						o = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.feedback
						}),
						r = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.comments
						}),
						c = null == e ? void 0 : e.map(function(n) {
							return parseInt(n.data.assignmentdetails.comment_total)
						});
					return (0, a.jsxs)(a.Fragment, {
						children: [0 == t && (0, a.jsx)(H, {
							responseData: e
						}), 1 == t && (0, a.jsx)(B, {
							responseData: e,
							submissionStatus: t,
							unixTimestamp: i,
							Text: s,
							feedbackdetails: o,
							comments: r,
							comment_total: c
						})]
					})
				},
				V = function() {
					var n = (0, s.Z)((0, i.useState)(null), 2),
						e = n[0],
						t = n[1],
						r = (0, s.Z)((0, i.useState)(!1), 2),
						c = (r[0], r[1]),
						l = (0, o.useRouter)().query.ufield;
					(0, i.useEffect)(function() {
						d()
					}, [l]);
					var d = function() {
							var n = "".concat(M.cfg.wwwroot, "/lib/ajax/service.php?sesskey=").concat(M.cfg.sesskey, "&info=mod_qbassign_get_assignment_service");
							fetch(n, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify([{
									index: 0,
									methodname: "mod_qbassign_get_assignment_service",
									args: {
										uniquefield: l
									}
								}])
							}).then(function(n) {
								return n.json()
							}).then(function(n) {
								t(n)
							}).catch(function(n) {
								t(null), c(!0)
							})
						},
						m = null == e ? void 0 : e.map(function(n) {
							return n.data.assignmentdetails.submissiontypes.type
						});
					return (0, a.jsxs)(a.Fragment, {
						children: ["onlinetex" == m && (0, a.jsx)("div", {
							children: (0, a.jsx)(I, {
								responseData: e
							})
						}), "file" == m && (0, a.jsx)("div", {
							children: (0, a.jsx)(A, {
								responseData: e
							})
						}), "codeblock" == m && (0, a.jsx)("div", {
							children: (0, a.jsx)(X, {
								responseData: e
							})
						})]
					})
				}
		},
		22868: function() {},
		14777: function() {},
		99830: function() {},
		70209: function() {}
	},
	function(n) {
		n.O(0, [774, 272, 700, 110, 395, 26, 241, 119, 308, 95, 888, 179], function() {
			return n(n.s = 24511)
		}), _N_E = n.O()
	}
]);